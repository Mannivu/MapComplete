import Script from "./Script"
import fs from "fs"
import { Feature } from "geojson"
import { GeoOperations } from "../Logic/GeoOperations"
import { Utils } from "../Utils"
import { OsmObject } from "../Logic/Osm/OsmObject"
import { PhoneTextField, UrlTextfieldDef } from "../UI/Input/ValidatedTextField"
import { OsmId } from "../Models/OsmFeature"
import ScriptUtils from "./ScriptUtils"

interface PossibleMatch {
    /**
     * Distance in meter between the OSM-data and the external dataset
     */
    d: number

    osm_feature: Feature
    external_feature: Feature
}

interface ReplayResult {
    certainly_imported?: boolean
    possibly_imported?: boolean
    resting_properties?: Record<string, string>
}

export class Conflate extends Script {
    private earliestDate: Date = undefined
    private latestDate: Date = undefined
    private readonly historyCacheDir = "/tmp/cache/"

    constructor() {
        super(
            [
                "Conflation script",
                "",
                "This script is meant to be used to prepare imports. It takes one 'OSM'-dataset and one external dataset and tries to find an OSM-id for every external item.",
                "",
                "Arguments:",
                "osm_file.geojson external_file.geojson [search_range]",
                "- osm_file.geojson: a file exported from overpass, including meta (note: filename MUST contain either OSM or OpenStreetMap)",
                "- external_file.geojson: the data to import. Tags should be prepared to have an OSM-name",
                "- search_range: max distance at which a match will occur",
            ].join("\n")
        )
    }

    async main(args: string[]): Promise<void> {
        const [osm_file_path, external_file_path] = args
        let max_range = 50
        if (args.length === 3) {
            max_range = Number(args[2])
        }
        if (
            osm_file_path.toLowerCase().indexOf("osm") < 0 &&
            osm_file_path.toLowerCase().indexOf("openstreetmap") < 0
        ) {
            throw "OSM File path must contain 'osm' or 'openStreetMap'"
        }

        if (
            external_file_path.toLowerCase().indexOf("osm") >= 0 ||
            external_file_path.toLowerCase().indexOf("openstreetmap") >= 0
        ) {
            throw "External File path may not contain 'osm' or 'openStreetMap'"
        }

        const external_features: Feature[] = JSON.parse(
            fs.readFileSync(external_file_path, { encoding: "utf-8" })
        ).features
        const osm_features: Feature[] = JSON.parse(
            fs.readFileSync(osm_file_path, { encoding: "utf-8" })
        ).features

        const bestMatches = await this.calculateMatches(external_features, osm_features, max_range)
        const unmatched = external_features.filter(
            (f) => !bestMatches.some((matched) => matched.match.external_feature === f)
        )
        const match_lengths: (string | number)[][] = [
            [
                "osm_id",
                "match_distance",
                "osm_name",
                "imported",
                "status_external",
                "...properties_differences",
            ],
        ]
        for (const { match, replayed } of bestMatches) {
            const { external_feature, d, osm_feature } = match
            const { possibly_imported, certainly_imported, resting_properties } = replayed
            const status = resting_properties["status"]
            delete resting_properties["status"]
            if (Object.keys(resting_properties).length === 0) {
                continue
            }
            match_lengths.push([
                osm_feature.properties["@id"],
                d,
                osm_feature.properties.name,
                certainly_imported ? "import" : possibly_imported ? "prob import" : "new",
                status,
                JSON.stringify(resting_properties),
            ])
        }

        fs.writeFileSync(
            "../onwheels-data-prep/matches.tsv",
            match_lengths.map((l) => l.join("\t")).join("\n")
        )

        fs.writeFileSync(
            "../onwheels-data-prep/unmatched.geojson",
            JSON.stringify(
                {
                    type: "FeatureCollection",
                    features: unmatched,
                },

                null,
                "  "
            )
        )
    }

    private async findTimeFork(
        externalName: string,
        osmName: string,
        osmId: OsmId
    ): Promise<{ earliestDateOfImport; latestDateOfImport }> {
        const history = await OsmObject.DownloadHistory(osmId).AsPromise((h) => h.length > 0)
        let earliest: Date = undefined
        let latest: Date = undefined
        for (const historyElement of history) {
            const csTime = new Date(historyElement.tags["_last_edit:timestamp"])
            if (isNaN(csTime.getTime())) {
                console.error("Could not parse" + historyElement.tags["_last_edit:timestamp"])
                return undefined
            }
            const nameIdentical = historyElement.tags.name === externalName
            if (nameIdentical) {
                if (earliest == undefined) {
                    earliest = csTime
                }
                latest = csTime
            }
        }

        if (history.at(-1).tags.name === externalName) {
            // Not changed yet, so no actual hint about when this import could have happened
            latest = new Date()
        }

        if (this.earliestDate === undefined || earliest?.getTime() > this.earliestDate?.getTime()) {
            this.earliestDate = earliest
        }
        if (this.latestDate === undefined || latest?.getTime() < this.latestDate?.getTime()) {
            this.latestDate = latest
        }

        return { earliestDateOfImport: earliest, latestDateOfImport: latest }
    }

    private findPossibleMatchesFor(
        osm_features: Feature[],
        externalFeature: Feature,
        max_range: number
    ): PossibleMatch[] {
        const possibleMatches: PossibleMatch[] = []
        for (const osmFeature of osm_features) {
            const d = GeoOperations.distanceBetween(
                GeoOperations.centerpointCoordinates(externalFeature),
                GeoOperations.centerpointCoordinates(osmFeature)
            )

            if (d < max_range) {
                possibleMatches.push({
                    external_feature: externalFeature,
                    osm_feature: osmFeature,
                    d,
                })
            }
        }
        return possibleMatches
    }

    private async stillOnline(url: string): Promise<boolean | string> {
        // return true
        if (url.indexOf("facebook.com") > 0) {
            return true
        }
        const cachePath = this.historyCacheDir + "/urls/    " + url.replace(/[/\\:]/g, "_")
        if (fs.existsSync(cachePath)) {
            const online = JSON.parse(fs.readFileSync(cachePath, { encoding: "utf-8" }))
            return online
        }
        let online: boolean | string = false
        try {
            online = await this.stillOnlineUncached(url)
        } catch (e) {
            console.log(e)
            const urlObj = new URL(url)
            if (e === "NOT_FOUND" && urlObj.pathname.length > 0) {
                console.log("Maybe trying the homepage will help?")
            }
        }
        fs.writeFileSync(cachePath, JSON.stringify(online, null, "  "), { encoding: "utf-8" })
        return online
    }

    private async stillOnlineUncached(url: string): Promise<boolean | string> {
        if (!url.startsWith("http")) {
            url = "https://" + url
        }
        url = url.replace("http://", "https://")
        try {
            const result = await ScriptUtils.Download(url)
            if (result["redirect"]) {
                if (result["redirect"].startsWith("/")) {
                    return true
                }
                return result["redirect"]
            }
            if (result["content"]) {
                return true
            }
            console.error("Got a result, but no content?", url, result)
        } catch (e) {
            console.log("Offline (error):", url, e.message)
            return false
        }
    }

    private async historyCached(id): Promise<OsmObject[]> {
        const cachePath = this.historyCacheDir + "/" + id.replace("/", "_")
        if (fs.existsSync(cachePath)) {
            return JSON.parse(fs.readFileSync(cachePath, { encoding: "utf-8" }))
        }
        const history = await OsmObject.DownloadHistory(id).AsPromise((l) => l.length > 0)
        fs.writeFileSync(cachePath, JSON.stringify(history, null, "  "), { encoding: "utf-8" })
        return history
    }

    private async normalize(properties: Record<string, string>) {
        if (properties["phone"]) {
            properties["phone"] = new PhoneTextField().reformat(properties["phone"], () => "be")
        }
        if (properties["website"]) {
            let website = properties.website.toLowerCase()
            website
                .replace("http://http://", "http://")
                .replace("https//", "https://")
                .replace("http://", "https://")
            const validator = new UrlTextfieldDef()
            if (validator.isValid(website)) {
                properties.website = new UrlTextfieldDef().reformat(website)
                const stillOnline = await this.stillOnline(website)
                if (stillOnline === false) {
                    delete properties.website
                }
                if (typeof stillOnline === "string") {
                    properties.website = stillOnline
                }
            } else {
                console.log("Invalid url:", website)
            }
        }

        if (properties["healthcare"] === "pharmacy") {
            // we don't care about this tag
            delete properties["healthcare"]
        }
    }

    private async replay(match: PossibleMatch): Promise<ReplayResult> {
        const history = await this.historyCached(match.osm_feature.properties["@id"])

        let certainly_imported = match.d < 0.0001
        let possibly_imported = false

        const resting_properties = { ...match.external_feature.properties }
        await this.normalize(resting_properties)

        for (const historyElement of history) {
            await this.normalize(historyElement.tags)

            if (historyElement.tags.name === resting_properties.name) {
                possibly_imported = true
            }

            for (const key in resting_properties) {
                if (this.str_compare(historyElement.tags[key], resting_properties[key])) {
                    delete resting_properties[key]
                }
            }
        }

        return {
            certainly_imported,
            possibly_imported,
            resting_properties,
        }
    }

    private str_compare(a, b): boolean {
        if (a === undefined || b === undefined) {
            return false
        }
        a = a.toLowerCase().replaceAll(/[éèáàüë].*$/g, "")
        b = b.toLowerCase().replaceAll(/[éèáàüë].*$/g, "")

        return a === b
    }

    private async calculateMatches(
        external_features: Feature[],
        osm_features: Feature[],
        max_range: number
    ): Promise<{ match: PossibleMatch; replayed: ReplayResult }[]> {
        const matches: { match: PossibleMatch; replayed: ReplayResult }[] = []
        for (const f of external_features) {
            const match = await this.calculateMatch(osm_features, f, max_range)
            if (match) {
                matches.push(match)
            }
        }
        return matches
    }

    private async calculateMatch(
        osm_features: Feature[],
        externalFeature: Feature,
        max_range: number
    ): Promise<{ match: PossibleMatch; replayed: ReplayResult }> {
        const possibleMatches = this.findPossibleMatchesFor(
            osm_features,
            externalFeature,
            max_range
        )
        let bestMatch: PossibleMatch = undefined
        let bestMatchReplayed: ReplayResult = undefined
        for (const possibleMatch of possibleMatches) {
            const replayed = await this.replay(possibleMatch)
            if (
                bestMatch === undefined ||
                (replayed.certainly_imported && !bestMatchReplayed.possibly_imported) ||
                (!bestMatchReplayed.certainly_imported &&
                    replayed.possibly_imported &&
                    !bestMatchReplayed.possibly_imported)
            ) {
                bestMatch = possibleMatch
                bestMatchReplayed = replayed
            }
        }
        if (bestMatch === undefined) {
            return undefined
        }
        return {
            replayed: bestMatchReplayed,
            match: bestMatch,
        }
    }

    private levenshteinDistancePharmacy(a?: string, b?: string) {
        a ??= ""
        b ??= ""
        a = a.toLowerCase()
        b = b.toLowerCase()
        return Math.min(
            ...["", "pharmacie", "apotheek", "pharmacie de", "apotheke"].map((prefix) =>
                Math.min(
                    Utils.levenshteinDistance(a, prefix + b),
                    Utils.levenshteinDistance(prefix + a, b)
                )
            )
        )
    }

    private conflate(
        osmFeature: Record<string, string>,
        externalFeature: Record<string, string>
    ): string[] {
        const r: string[] = []

        for (const externalFeatureKey in externalFeature) {
            if (
                [
                    "status",
                    "healthcare",
                    "unmeasurable_reason",
                    "timestamp_created",
                    "timestamp_last_modified",
                ].indexOf(externalFeatureKey) >= 0
            ) {
                continue
            }
            const v = externalFeature[externalFeatureKey]
            const osmV = osmFeature[externalFeatureKey]
            if (osmV === undefined) {
                r.push("+" + externalFeatureKey + "=" + v)
            } else if (osmV !== v) {
                r.push("~" + externalFeatureKey + "=" + v + " (osm: " + osmV + ")")
            }
        }

        return r.map((l) => l.replace(/\n/g, "\\n"))
    }
}

new Conflate().run()
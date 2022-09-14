import MinimapImplementation from "./UI/Base/MinimapImplementation";

MinimapImplementation.initialize()

import {Utils} from "./Utils";
import {SvgToPdf, SvgToPdfOptions} from "./Utils/svgToPdf";
import {AllKnownLayouts} from "./Customizations/AllKnownLayouts";
import Locale from "./UI/i18n/Locale";

let i = 0

function createElement(): string {
    const div = document.createElement("div")
    div.id = "freediv-" + (i++)
    document.getElementById("extradiv").append(div)
    return div.id
}

async function main() {

    const svg = await Utils.download(window.location.protocol + "//" + window.location.host + "/assets/templates/MapComplete-flyer.svg")
    const svgBack = await Utils.download(window.location.protocol + "//" + window.location.host + "/assets/templates/MapComplete-flyer.back.svg")

    const options = <SvgToPdfOptions>{
        getFreeDiv: createElement,
        textSubstitutions: {
            mapCount: "" + Array.from(AllKnownLayouts.allKnownLayouts.values()).filter(th => !th.hideFromOverview).length
        },
        disableMaps: false
    }
    Locale.language.setData("nl")
    const back = new SvgToPdf([svgBack], options)
    const front = await new SvgToPdf([svg], options)
    await back.ConvertSvg("Flyer-back-nl.pdf")
    await front.ConvertSvg("Flyer-front-nl.pdf")
    Locale.language.setData("en")
    await back.ConvertSvg("Flyer-back-en.pdf")
    await front.ConvertSvg("Flyer-front-en.pdf")


    /*
    const svg = await Utils.download(window.location.protocol + "//" + window.location.host + "/assets/templates/MapComplete-flyer.svg")


    Locale.language.setData("en")
    const svgToPdf = new SvgToPdf([svgBack], {
        getFreeDiv: createElement,
        textSubstitutions: {
            mapCount: "" + Array.from(AllKnownLayouts.allKnownLayouts.values()).filter(th => !th.hideFromOverview).length
        }
    })
    new VariableUiElement(svgToPdf.currentState).AttachTo("maindiv")
    await svgToPdf.Prepare()
    console.log("Used translations", svgToPdf._usedTranslations)
    await svgToPdf.ConvertSvg("flyer_nl.pdf")
    /*
Locale.language.setData("en")
await new SvgToPdf([svgBack], {
    textSubstitutions: {
        mapCount: "" + Array.from(AllKnownLayouts.allKnownLayouts.values()).filter(th => !th.hideFromOverview).length
    }
}).ConvertSvg("flyer_en.pdf")

Locale.language.setData("nl")
await new SvgToPdf([svgBack], {
    textSubstitutions: {
        mapCount: "" + Array.from(AllKnownLayouts.allKnownLayouts.values()).filter(th => !th.hideFromOverview).length
    }
}).ConvertSvg("flyer_nl.pdf")*/
}

main().then(() => console.log("Done!"))

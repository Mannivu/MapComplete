export default {
  "description": "The PointRenderingConfig gives all details onto how to render a single point of a feature.\n\nThis can be used if:\n\n- The feature is a point\n- To render something at the centroid of an area, or at the start, end or projected centroid of a way",
  "type": "object",
  "properties": {
    "location": {
      "description": "All the locations that this point should be rendered at.\nPossible values are:\n- `point`: only renders points at their location\n- `centroid`: show a symbol at the centerpoint of a (multi)Linestring and (multi)polygon. Points will _not_ be rendered with this\n- `projected_centerpoint`: Only on (multi)linestrings: calculate the centerpoint and snap it to the way\n- `start` and `end`: only on linestrings: add a point to the first/last coordinate of the LineString",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "icon": {
      "description": "The icon for an element.\nNote that this also doubles as the icon for this layer (rendered with the overpass-tags) ánd the icon in the presets.\n\nThe result of the icon is rendered as follows:\nthe resulting string is interpreted as a _list_ of items, separated by \";\". The bottommost layer is the first layer.\nAs a result, on could use a generic pin, then overlay it with a specific icon.\nTo make things even more practical, one can use all SVG's from the folder \"assets/svg\" and _substitute the color_ in it.\nE.g. to draw a red pin, use \"pin:#f00\", to have a green circle with your icon on top, use `circle:#0f0;<path to my icon.svg>`\n\nType: icon",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "iconBadges": {
      "description": "A list of extra badges to show next to the icon as small badge\nThey will be added as a 25% height icon at the bottom right of the icon, with all the badges in a flex layout.\n\nNote: strings are interpreted as icons, so layering and substituting is supported. You can use `circle:white;./my_icon.svg` to add a background circle",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "if": {
            "$ref": "#/definitions/TagConfigJson",
            "description": "The main representation of Tags.\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for more documentation"
          },
          "then": {
            "description": "Badge to show\nType: icon",
            "anyOf": [
              {
                "$ref": "#/definitions/TagRenderingConfigJson"
              },
              {
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "if",
          "then"
        ]
      }
    },
    "iconSize": {
      "description": "A string containing \"width,height\" or \"width,height,anchorpoint\" where anchorpoint is any of 'center', 'top', 'bottom', 'left', 'right', 'bottomleft','topright', ...\nDefault is '40,40,center'",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "rotation": {
      "description": "The rotation of an icon, useful for e.g. directions.\nUsage: as if it were a css property for 'rotate', thus has to end with 'deg', e.g. `90deg`, `{direction}deg`, `calc(90deg - {camera:direction}deg)``",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "label": {
      "description": "A HTML-fragment that is shown below the icon, for example:\n<div style=\"background: white\">{name}</div>\n\nIf the icon is undefined, then the label is shown in the center of the feature.\nNote that, if the wayhandling hides the icon then no label is shown as well.",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "css": {
      "description": "A snippet of css code which is applied onto the container of the entire marker",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "cssClasses": {
      "description": "A snippet of css-classes which are applied onto the container of the entire marker. They can be space-separated",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "labelCss": {
      "description": "Css that is applied onto the label",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "labelCssClasses": {
      "description": "Css classes that are applied onto the label; can be space-separated",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "type": "string"
        }
      ]
    },
    "pitchAlignment": {
      "description": "If the map is pitched, the marker will stay parallel to the screen.\nSet to 'map' if you want to put it flattened on the map",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "enum": [
            "canvas",
            "map"
          ],
          "type": "string"
        }
      ]
    },
    "rotationAlignment": {
      "description": "If the map is rotated, the icon will still point to the north if no rotation was applied",
      "anyOf": [
        {
          "$ref": "#/definitions/TagRenderingConfigJson"
        },
        {
          "enum": [
            "canvas",
            "map"
          ],
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "location"
  ],
  "definitions": {
    "TagConfigJson": {
      "description": "The main representation of Tags.\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for more documentation",
      "anyOf": [
        {
          "$ref": "#/definitions/AndTagConfigJson"
        },
        {
          "description": "Chain many tags, to match, all of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation",
          "type": "object",
          "properties": {
            "or": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/TagConfigJson"
              }
            }
          },
          "required": [
            "or"
          ]
        },
        {
          "type": "string"
        }
      ]
    },
    "AndTagConfigJson": {
      "description": "Chain many tags, to match, a single of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation",
      "type": "object",
      "properties": {
        "and": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TagConfigJson"
          }
        }
      },
      "required": [
        "and"
      ]
    },
    "OrTagConfigJson": {
      "description": "Chain many tags, to match, all of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation",
      "type": "object",
      "properties": {
        "or": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TagConfigJson"
          }
        }
      },
      "required": [
        "or"
      ]
    },
    "Record<string,string>": {
      "type": "object"
    },
    "Record<string,string|Record<string,string>>": {
      "type": "object"
    },
    "DenominationConfigJson": {
      "type": "object",
      "properties": {
        "useIfNoUnitGiven": {
          "description": "If this evaluates to true and the value to interpret has _no_ unit given, assumes that this unit is meant.\nAlternatively, a list of country codes can be given where this acts as the default interpretation\n\nE.g., a denomination using \"meter\" would probably set this flag to \"true\";\na denomination for \"mp/h\" will use the condition \"_country=gb\" to indicate that it is the default in the UK.\n\nIf none of the units indicate that they are the default, the first denomination will be used instead",
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "boolean"
            }
          ]
        },
        "canonicalDenomination": {
          "description": "The canonical value for this denomination which will be added to the value in OSM.\ne.g. \"m\" for meters\nIf the user inputs '42', the canonical value will be added and it'll become '42m'.\n\nImportant: often, _no_ canonical values are expected, e.g. in the case of 'maxspeed' where 'km/h' is the default.\nIn this case, an empty string should be used",
          "type": "string"
        },
        "canonicalDenominationSingular": {
          "description": "The canonical denomination in the case that the unit is precisely '1'.\nUsed for display purposes only.\n\nE.g.: for duration of something in minutes: `2 minutes` but `1 minute`; the `minute` goes here",
          "type": "string"
        },
        "alternativeDenomination": {
          "description": "A list of alternative values which can occur in the OSM database - used for parsing.\nE.g.: while 'm' is canonical, `meter`, `mtrs`, ... can occur as well",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "human": {
          "description": "The value for humans in the dropdown. This should not use abbreviations and should be translated, e.g.\n{\n    \"en\": \"meter\",\n    \"fr\": \"metre\"\n}",
          "anyOf": [
            {
              "$ref": "#/definitions/Record<string,string>"
            },
            {
              "type": "string"
            }
          ]
        },
        "humanSingular": {
          "description": "The value for humans in the dropdown. This should not use abbreviations and should be translated, e.g.\n{\n    \"en\": \"minute\",\n    \"nl\": \"minuut\"\n}",
          "anyOf": [
            {
              "$ref": "#/definitions/Record<string,string>"
            },
            {
              "type": "string"
            }
          ]
        },
        "prefix": {
          "description": "If set, then the canonical value will be prefixed instead, e.g. for '€'\nNote that if all values use 'prefix', the dropdown might move to before the text field",
          "type": "boolean"
        }
      },
      "required": [
        "canonicalDenomination"
      ]
    },
    "TagRenderingConfigJson": {
      "description": "A TagRenderingConfigJson is a single piece of code which converts one ore more tags into a HTML-snippet.\nFor an _editable_ tagRendering, use 'QuestionableTagRenderingConfigJson' instead, which extends this one",
      "type": "object",
      "properties": {
        "id": {
          "description": "The id of the tagrendering, should be an unique string.\nUsed to keep the translations in sync. Only used in the tagRenderings-array of a layerConfig, not requered otherwise.\n\nUse 'questions' to trigger the question box of this group (if a group is defined)",
          "type": "string"
        },
        "labels": {
          "description": "A list of labels. These are strings that are used for various purposes, e.g. to filter them away",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "classes": {
          "description": "A list of css-classes to apply to the entire tagRendering if the answer is known (not applied on the question).\nThis is only for advanced users",
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "string"
            }
          ]
        },
        "description": {
          "description": "A human-readable text explaining what this tagRendering does.\nMostly used for the shared tagrenderings",
          "anyOf": [
            {
              "$ref": "#/definitions/Record<string,string>"
            },
            {
              "type": "string"
            }
          ]
        },
        "render": {
          "description": "Renders this value. Note that \"{key}\"-parts are substituted by the corresponding values of the element.\nIf neither 'textFieldQuestion' nor 'mappings' are defined, this text is simply shown as default value.\n\nNote that this is a HTML-interpreted value, so you can add links as e.g. '<a href='{website}'>{website}</a>' or include images such as `This is of type A <br><img src='typeA-icon.svg' />`\ntype: rendered",
          "anyOf": [
            {
              "$ref": "#/definitions/Record<string,string>"
            },
            {
              "type": "object",
              "properties": {
                "special": {
                  "allOf": [
                    {
                      "$ref": "#/definitions/Record<string,string|Record<string,string>>"
                    },
                    {
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "type"
                      ]
                    }
                  ]
                }
              },
              "required": [
                "special"
              ]
            },
            {
              "type": "string"
            }
          ]
        },
        "condition": {
          "description": "Only show this tagrendering (or ask the question) if the selected object also matches the tags specified as `condition`.\n\nThis is useful to ask a follow-up question.\nFor example, within toilets, asking _where_ the diaper changing table is is only useful _if_ there is one.\nThis can be done by adding `\"condition\": \"changing_table=yes\"`\n\nA full example would be:\n```json\n    {\n      \"question\": \"Where is the changing table located?\",\n      \"render\": \"The changing table is located at {changing_table:location}\",\n      \"condition\": \"changing_table=yes\",\n      \"freeform\": {\n        \"key\": \"changing_table:location\",\n        \"inline\": true\n      },\n      \"mappings\": [\n        {\n          \"then\": \"The changing table is in the toilet for women.\",\n          \"if\": \"changing_table:location=female_toilet\"\n        },\n        {\n          \"then\": \"The changing table is in the toilet for men.\",\n          \"if\": \"changing_table:location=male_toilet\"\n        },\n        {\n          \"if\": \"changing_table:location=wheelchair_toilet\",\n          \"then\": \"The changing table is in the toilet for wheelchair users.\",\n        },\n        {\n          \"if\": \"changing_table:location=dedicated_room\",\n          \"then\": \"The changing table is in a dedicated room. \",\n        }\n      ],\n      \"id\": \"toilet-changing_table:location\"\n    },\n```",
          "anyOf": [
            {
              "$ref": "#/definitions/AndTagConfigJson",
              "description": "Chain many tags, to match, a single of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation"
            },
            {
              "$ref": "#/definitions/OrTagConfigJson",
              "description": "Chain many tags, to match, all of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation"
            },
            {
              "type": "string"
            }
          ]
        },
        "metacondition": {
          "description": "If set, this tag will be evaluated agains the _usersettings/application state_ table.\nEnable 'show debug info' in user settings to see available options.\nNote that values with an underscore depicts _application state_ (including metainfo about the user) whereas values without an underscore depict _user settings_",
          "anyOf": [
            {
              "$ref": "#/definitions/AndTagConfigJson",
              "description": "Chain many tags, to match, a single of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation"
            },
            {
              "$ref": "#/definitions/OrTagConfigJson",
              "description": "Chain many tags, to match, all of these should be true\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for documentation"
            },
            {
              "type": "string"
            }
          ]
        },
        "freeform": {
          "description": "Allow freeform text input from the user",
          "type": "object",
          "properties": {
            "key": {
              "description": "If this key is present, then 'render' is used to display the value.\nIf this is undefined, the rendering is _always_ shown",
              "type": "string"
            }
          },
          "required": [
            "key"
          ]
        },
        "mappings": {
          "description": "Allows fixed-tag inputs, shown either as radiobuttons or as checkboxes",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "if": {
                "$ref": "#/definitions/TagConfigJson",
                "description": "If this condition is met, then the text under `then` will be shown.\nIf no value matches, and the user selects this mapping as an option, then these tags will be uploaded to OSM.\n\nFor example: {'if': 'diet:vegetarion=yes', 'then':'A vegetarian option is offered here'}\n\nThis can be an substituting-tag as well, e.g. {'if': 'addr:street:={_calculated_nearby_streetname}', 'then': '{_calculated_nearby_streetname}'}"
              },
              "then": {
                "description": "If the condition `if` is met, the text `then` will be rendered.\nIf not known yet, the user will be presented with `then` as an option\nType: rendered",
                "anyOf": [
                  {
                    "$ref": "#/definitions/Record<string,string>"
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "icon": {
                "description": "An icon supporting this mapping; typically shown pretty small\nType: icon",
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "path": {
                        "description": "The path to the icon\nType: icon",
                        "type": "string"
                      },
                      "class": {
                        "description": "A hint to mapcomplete on how to render this icon within the mapping.\nThis is translated to 'mapping-icon-<classtype>', so defining your own in combination with a custom CSS is possible (but discouraged)",
                        "type": "string"
                      }
                    },
                    "required": [
                      "path"
                    ]
                  },
                  {
                    "type": "string"
                  }
                ]
              }
            },
            "required": [
              "if",
              "then"
            ]
          }
        }
      }
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}
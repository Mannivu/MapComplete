export default {
  "description": "A TagRenderingConfigJson is a single piece of code which converts one ore more tags into a HTML-snippet.\nFor an _editable_ tagRendering, use 'QuestionableTagRenderingConfigJson' instead, which extends this one",
  "type": "object",
  "properties": {
    "render": {
      "description": "question: What text should be rendered?\n\nThis piece of text will be shown in the infobox.\nNote that \"{key}\"-parts are substituted by the corresponding values of the element.\n\nThis text will be shown if:\n- there is no mapping which matches (or there are no matches)\n- no question, no mappings and no 'freeform' is set\n\nNote that this is a HTML-interpreted value, so you can add links as e.g. '&lt;a href='{website}'>{website}&lt;/a>' or include images such as `This is of type A &lt;br>&lt;img src='typeA-icon.svg' />`\ntype: rendered",
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
      "description": "question: When should this item be shown?\n\nOnly show this tagrendering (or ask the question) if the selected object also matches the tags specified as `condition`.\n\nThis is useful to ask a follow-up question.\nFor example, within toilets, asking _where_ the diaper changing table is is only useful _if_ there is one.\nThis can be done by adding `\"condition\": \"changing_table=yes\"`\n\nA full example would be:\n```json\n    {\n      \"question\": \"Where is the changing table located?\",\n      \"render\": \"The changing table is located at {changing_table:location}\",\n      \"condition\": \"changing_table=yes\",\n      \"freeform\": {\n        \"key\": \"changing_table:location\",\n        \"inline\": true\n      },\n      \"mappings\": [\n        {\n          \"then\": \"The changing table is in the toilet for women.\",\n          \"if\": \"changing_table:location=female_toilet\"\n        },\n        {\n          \"then\": \"The changing table is in the toilet for men.\",\n          \"if\": \"changing_table:location=male_toilet\"\n        },\n        {\n          \"if\": \"changing_table:location=wheelchair_toilet\",\n          \"then\": \"The changing table is in the toilet for wheelchair users.\",\n        },\n        {\n          \"if\": \"changing_table:location=dedicated_room\",\n          \"then\": \"The changing table is in a dedicated room. \",\n        }\n      ],\n      \"id\": \"toilet-changing_table:location\"\n    },\n```",
      "anyOf": [
        {
          "$ref": "#/definitions/{and:TagConfigJson[];}"
        },
        {
          "$ref": "#/definitions/{or:TagConfigJson[];}"
        },
        {
          "type": "string"
        }
      ]
    },
    "metacondition": {
      "description": "question: When should this item be shown (including special conditions)?\n\nIf set, this tag will be evaluated agains the _usersettings/application state_ table.\nEnable 'show debug info' in user settings to see available options.\nNote that values with an underscore depicts _application state_ (including metainfo about the user) whereas values without an underscore depict _user settings_",
      "anyOf": [
        {
          "$ref": "#/definitions/{and:TagConfigJson[];}"
        },
        {
          "$ref": "#/definitions/{or:TagConfigJson[];}"
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
            "description": "question: When should this single mapping match?\n\nIf this condition is met, then the text under `then` will be shown.\nIf no value matches, and the user selects this mapping as an option, then these tags will be uploaded to OSM.\n\nFor example: {'if': 'diet:vegetarion=yes', 'then':'A vegetarian option is offered here'}\n\nThis can be an substituting-tag as well, e.g. {'if': 'addr:street:={_calculated_nearby_streetname}', 'then': '{_calculated_nearby_streetname}'}"
          },
          "then": {
            "description": "question: What text should be shown?\n\nIf the condition `if` is met, the text `then` will be rendered.\nIf not known yet, the user will be presented with `then` as an option\nType: rendered",
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
            "description": "question: What icon should be added to this mapping?\nAn icon supporting this mapping; typically shown pretty small\nType: icon",
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
    "classes": {
      "description": "question: What css-classes should be applied to showing this attribute?\n\nA list of css-classes to apply to the entire tagRendering.\nThese classes are applied in 'answer'-mode, not in question mode\nThis is only for advanced users.\n\nValues are split on ` `  (space)",
      "type": "string"
    }
  },
  "definitions": {
    "TagConfigJson": {
      "description": "The main representation of Tags.\nSee https://github.com/pietervdvn/MapComplete/blob/develop/Docs/Tags_format.md for more documentation\n\ntype: tag",
      "anyOf": [
        {
          "$ref": "#/definitions/{and:TagConfigJson[];}"
        },
        {
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
    "{and:TagConfigJson[];}": {
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
    "{or:TagConfigJson[];}": {
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
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}
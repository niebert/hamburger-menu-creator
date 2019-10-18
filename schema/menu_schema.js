
vDataJSON["menu_schema"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "options":{
      "disable_collapse": false,
      "disable_properties": true,
      "disable_edit_json": true
    },
    "title": "Hamburger Menu Creator",
    "definitions": {
      "comment": {
          "title": "Comment:",
          "type": "string",
          "format": "textarea",
          "default": ""
      },
      "visibility": {
          "title": "Visibility",
          "type": "string",
          "enum": [
              "visible",
              "hidden",
              "not used"
          ],
          "default":"visible"
      },
      "yesno":{
        "default": "yes",
        "type": "string",
        "enum": [
            "yes",
            "no"
        ]
      },
      "selectoricon": {
        "type": "string",
        "title": "Menu Icon",
        "default": "",
        "enum":[
            "circle-thin",
            "home",
            "fa-folder-open",
            "fa-file-save",
            "fa-print",
            "edit",
            "eye",
            "fa-paste",
            "fa-copy",
            "fa-enumertation",
            "calendar",
            "camera",
            "line-chart",
            "fa-picture",
            "info",
            "fa-envelope",
            "phone",
            "shop",
            "search",
            "gear",
            "fa-trash",
            "refresh",
            "recylce",
            "power",
            "fa-barcode",
            "fa-file-archive",
            "fa-audio-play",
            "fa-audio-stop",
            "fa-audio-pause",
            "fa-audio-record",
            "fa-audio-backward",
            "fa-audio-forward",
            "fa-audio-eject",
            "fa-tablet"
        ],
        "options": {
          "enum_titles": [
            " ",
            "Home",
            "Load",
            "Save",
            "Print",
            "Edit",
            "Eye/View",
            "Paste",
            "Copy",
            "Enumertation",
            "Calendar",
            "Camera",
            "Chart/Diagrams",
            "Images",
            "Info",
            "Mail",
            "Phone",
            "Shop",
            "Search",
            "Settings",
            "Trash",
            "Refresh",
            "Recycle",
            "Power On/Off",
            "Barcode",
            "ZIP",
            "Media:Play",
            "Media:Stop",
            "Media:Pause",
            "Media:Record",
            "Media:Backward",
            "Media:Forward",
            "Media:Eject",
            "Device:Tablet"
          ]
        }
      },
      "target": {
        "type": "string",
        "default": "",
        "enum":[
            "",
            " target=\"_blank\" "
        ],
        "options": {
          "enum_titles": [
            "same window",
            "new window"
          ]
        }
      },
      "selectorclass": {
        "type": "string",
        "default": "",
        "enum":[
           "",
           "Array",
           "Boolean",
           "Float",
           "Function",
           "Hash",
           "Integer",
           "Object",
           "RegularExp",
           "String",
           "App",
           "AppAbstract",
           "Document",
           "LinkParam",
           "JSONEditor"
        ]
      }

    },
    "type": "object",
    "id": "https://niehausbert.gitlab.io/jsoneditor4menu",
    "defaultProperties": [
        "data",
        "settings"
    ],
    "properties": {
        "data": {
            "title":"JSON Data",
            "propertyOrder": 10,
            "type": "object",
            "headerTemplate": "App: {{self.appname}}",
            "id": "/properties/data",
            "options": {
              "collapsed": false,
              "disable_properties": true,
              "disable_edit_json": true
            },
            "defaultProperties": [
                "appname",
                "apptitle",
                "appsubtitle",
                "comment",
                "generated",
                "reposinfo",
                "menuitems"
            ],
            "properties": {
                "appname": {
                    "type": "string",
                    "id": "/properties/data/properties/appname",
                    "title": "App:",
                    "propertyOrder": 10,
                    "default": "NewApp",
                    "format": "text",
                    "description": "Use as appname (uppercase character allowed, e.g.'MyWebApp') - it is used for exported files as filenames e.g. 'mywebapp.json'."
                },
                "apptitle": {
                    "type": "string",
                    "id": "/properties/data/properties/apptitle",
                    "title": "App Title",
                    "propertyOrder": 20,
                    "format": "text",
                    "default": "App-Title"
                },
                "appsubtitle": {
                    "type": "string",
                    "id": "/properties/data/properties/apptitle",
                    "title": "App Subtitle",
                    "propertyOrder": 25,
                    "format": "text",
                    "default": "App-Subtitle"
                },
                "comment": {
                    "type": "string",
                    "id": "/properties/data/properties/comment",
                    "title": "Description for the App",
                    "propertyOrder": 30,
                    "description": "Describe the main application of this class for the software development. This description will be used to generate a documentation of the UML definition.",
                    "$ref": "#/definitions/comment"
                },
                "generated": {
                  "type": "string",
                  "id": "/properties/settings/properties/created",
                  "title": "App generated:",
                  "default": getDateTime(),
                  "format": "text",
                  "propertyOrder": 3,
                  "size":12,
                  "options": {
                    "hidden": true
                  },
                  "description": "This is the time/date when the menu was created"
                },
                "menuitems": {
                    "type": "array",
                    "id": "/properties/data/properties/menuitems",
                    "title": "Menu Items",
                    "format": "tabs",
                    "options": {
                        "disable_collapse": false,
                        "disable_array_add": false,
                        "disable_array_delete": false,
                        "disable_array_reorder": false,
                        "disable_properties": true,
                        "collapsed": false,
                        "hidden": false
                    },
                    "items": {
                        "headerTemplate": "{{i1}}. {{self.title}}",
                        "oneOf": [
                            {
                                "type": "object",
                                "id": "/properties/data/properties/menuitems/oneof1page",
                                "title": "Type: Page",
                                "options": {
                                    "disable_collapse": true,
                                    "disable_edit_json": true,
                                    "disable_properties": true,
                                    "collapsed": false,
                                    "hidden": false
                                },
                                "defaultProperties": [
                                    "menutype",
                                    "menuicon",
                                    "visibility",
                                    "title",
                                    "content",
                                    "jsinit",
                                    "jscode"
                                ],
                                "required": [
                                  "menutype"
                                ],
                                "properties": {
                                    "menutype": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/menutype",
                                        "title": "Menutype",
                                        "enum": [ "page" ],
                                        "default": "page",
                                        "format": "text",
                                        "description": "This is a HTML page or external reference/URL",
                                        "options": {
                                            "hidden": true
                                        },
                                        "propertyOrder": 10
                                    },
                                    "title": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/title",
                                        "title": "Title",
                                        "default": "Item Title",
                                        "format": "text",
                                        "description": "Description for 'title' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/title'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 20
                                    },
                                    "menuicon": {
                                        "type": "string",
                                        "propertyOrder": 22,
                                        "id": "/properties/data/properties/menuitems/items/properties/menuicon",
                                        "$ref": "#/definitions/selectoricon"
                                    },
                                    "visibility": {
                                        "type": "string",
                                        "propertyOrder": 25,
                                        "id": "/properties/data/properties/menuitems/items/properties/visibility",
                                        "$ref": "#/definitions/visibility"
                                    },
                                    "content": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/content",
                                        "title": "Content",
                                        "default": "<!-- place content of the page here -->",
                                        "format": "html",
                                        "description": "Description for 'content' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/content'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 30
                                    }
                                }
                            },
                            {
                                "type": "object",
                                "id": "/properties/data/properties/menuitems/oneof2link",
                                "title": "Type: Link/URL",
                                "options": {
                                    "disable_collapse": true,
                                    "disable_edit_json": true,
                                    "disable_properties": true,
                                    "collapsed": false,
                                    "hidden": false
                                },
                                "defaultProperties": [
                                    "menutype",
                                    "visibility",
                                    "menuicon",
                                    "title",
                                    "url"
                                ],
                                "required": [
                                  "menutype"
                                ],
                                "properties": {
                                    "menutype": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/menutype",
                                        "title": "Menutype",
                                        "enum": [ "link" ],
                                        "default": "link",
                                        "format": "text",
                                        "description": "This menu item create a link to another HTML page or external webpage (e.g. tutorial on the web, a demo video on Youtube, ...). Select a new window as target for external websites.",
                                        "options": {
                                            "hidden": true
                                        },
                                        "propertyOrder": 10
                                    },
                                    "title": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/title",
                                        "title": "Title",
                                        "default": "Item Title for Link",
                                        "format": "text",
                                        "description": "Description for 'title' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/title'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 20
                                    },
                                    "menuicon": {
                                        "type": "string",
                                        "propertyOrder": 22,
                                        "id": "/properties/data/properties/menuitems/items/properties/menuicon",
                                        "$ref": "#/definitions/selectoricon"
                                    },
                                    "visibility": {
                                        "type": "string",
                                        "propertyOrder": 25,
                                        "id": "/properties/data/properties/menuitems/items/properties/visibility",
                                        "$ref": "#/definitions/visibility"
                                    },
                                    "url": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/url",
                                        "title": "Url",
                                        "default": "otherfile.html",
                                        "format": "text",
                                        "description": "Description for 'url' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/url'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 30
                                    },
                                    "target": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/url",
                                        "title": "Url",
                                        "default": "otherfile.html",
                                        "format": "text",
                                        "description": "Description for 'url' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/url'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 30
                                    }
                                }
                            },
                            {
                                "type": "object",
                                "id": "/properties/data/properties/menuitems/oneof3jscall",
                                "title": "Type: Javascript Call",
                                "options": {
                                  "disable_collapse": true,
                                  "disable_edit_json": true,
                                  "disable_properties": true,
                                  "collapsed": false,
                                  "hidden": false
                                },
                                "defaultProperties": [
                                    "menutype",
                                    "menuicon",
                                    "title",
                                    "jsinit",
                                    "jscall"
                                ],
                                "required": [
                                  "menutype"
                                ],
                                "properties": {
                                    "menutype": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/menutype",
                                        "title": "Menutype",
                                        "enum": [ "jscall" ],
                                        "default": "jscall",
                                        "format": "text",
                                        "description": "Description for 'menutype' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/menutype'",
                                        "options": {
                                            "hidden": true
                                        },
                                        "propertyOrder": 10
                                    },
                                    "title": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/title",
                                        "title": "Title",
                                        "default": "Item Title for JS-Call",
                                        "format": "text",
                                        "description": "Description for 'title' Type: 'string' Path: '/properties/data/properties/menuitems/items/properties/title'",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 20
                                    },
                                    "menuicon": {
                                        "type": "string",
                                        "propertyOrder": 22,
                                        "id": "/properties/data/properties/menuitems/items/properties/menuicon",
                                        "$ref": "#/definitions/selectoricon",
                                    },
                                    "visibility": {
                                        "type": "string",
                                        "propertyOrder": 25,
                                        "id": "/properties/data/properties/menuitems/items/properties/visibility",
                                        "$ref": "#/definitions/visibility"
                                    },
                                    "jscall": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/jscall",
                                        "title": "Menu Event Handler",
                                        "default": "vApp.do_something('myparam',34)",
                                        "format": "javascript",
                                        "description": "This code will be executed, if the user clicks on the menu item.",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 30
                                    },
                                    "jsinit": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/jsinit",
                                        "title": "Init Event Handler",
                                        "default": "<!-- Enter Code for initialization of event handler for menu item -->",
                                        "format": "javascript",
                                        "description": "(Init Event Handler) The 'jsinit' code will be executed once when the WebApp was loaded. ",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 40
                                    }
                                }
                            }
                        ]
                    },
                    "propertyOrder": 50
                }
            }
        },
        "settings": {
            "title":"Settings Editor",
            "propertyOrder": 20,
            "type": "object",
            "id": "/properties/settings",
            "options": {
              "collapsed": true
            },
            "defaultProperties": [
                "jsoneditor",
                "created",
                "modified",
                "extension4json",
                "colors",
                "configcode",
                "jsfiles",
                "htmlfiles",
                "cssfiles"
            ],
            "properties": {
              "jsoneditor": {
                "type": "string",
                "id": "/properties/settings/properties/jsoneditor",
                "title": "JSON Editor for Menu:",
                "default": "https://niehausbert.gitlab.io/jsoneditor4menu",
                "format": "text",
                "propertyOrder": 211,
                "size":12,
                "description": "This is the time/date when the menu was created"
              },
              "created": {
                "type": "string",
                "id": "/properties/settings/properties/created",
                "title": "Menu Created Date:",
                "default": getDateTime(),
                "format": "text",
                "propertyOrder": 222,
                "size":12,
                "description": "This is the time/date when the menu was created"
              },
              "modified": {
                "type": "string",
                "id": "/properties/settings/properties/modified",
                "title": "Last Modification:",
                "default": getDateTime(),
                "format": "text",
                "propertyOrder": 233,
                "size":12,
                "description": "When the JSON is updated in the WebApp the modified date is set to the current time - please save updates of your JSON"
              },
              "extension4json": {
                "type": "string",
                "id": "/properties/settings/properties/extension4json",
                "title": "Extension for saved JSON:",
                "default": ".json",
                "format": "text",
                "propertyOrder": 244,
                "size":12,
                "description": "JSON Editor stores a JSON file with this file extension"
              },
              "colors": {
                  "type": "object",
                  "id": "/properties/settings/properties/colors",
                  "title": "Colors",
                  "propertyOrder": 30,
                  "options": {
                    "disable_collapse": false,
                    "disable_edit_json": true,
                    "disable_properties": true,
                    "collapsed": true,
                    "hidden": false
                  },
                  "defaultProperties": [
                    "app",
                    "menu"
                  ],
                  "properties": {
                    "app": {
                      "type": "object",
                      "id": "/properties/settings/properties/colors/properties/app",
                      "title": "Default App Colors",
                      "options": {
                        "disable_collapse": false,
                        "disable_edit_json": true,
                        "disable_properties": true,
                        "collapsed": true,
                        "hidden": false
                      },
                      "defaultProperties": [
                        "background",
                        "textcolor"
                      ],
                      "properties": {
                        "background": {
                          "type": "string",
                          "id": "/properties/settings/properties/colors/properties/app/properties/background",
                          "title": "Background",
                          "default": "#F6F4E2",
                          "format": "color",
                          "description": "This is the  background of the app",
                          "options": {
                            "hidden": false
                          },
                          "propertyOrder": 10
                        },
                        "textcolor": {
                          "type": "string",
                          "id": "/properties/settings/properties/colors/properties/app/properties/textcolor",
                          "title": "Textcolor",
                          "default": "#70420D",
                          "format": "color",
                          "description": "Description for 'textcolor' Type: 'string' Path: '/properties/settings/properties/colors/properties/app/properties/textcolor'",
                          "options": {
                            "hidden": false
                          },
                          "propertyOrder": 20
                        }
                      },
                      "propertyOrder": 10
                    },
                    "menu": {
                      "type": "object",
                      "id": "/properties/settings/properties/colors/properties/menu",
                      "title": "Menu Colors",
                      "options": {
                        "disable_collapse": false,
                        "disable_edit_json": true,
                        "disable_properties": true,
                        "collapsed": true,
                        "hidden": false
                      },
                      "defaultProperties": [
                        "toggleleft",
                        "background",
                        "textcolor",
                        "mobile",
                        "desktop"
                      ],
                      "properties": {
                        "toggleleft": {
                          "type": "boolean",
                          "id": "/properties/settings/properties/colors/properties/menu/properties/toggleleft",
                          "title": "Toggle for Menu left",
                          "format": "checkbox",
                          "default": false,
                          "description": "A description for 'toggleleft'  Type: 'boolean'",
                          "options": {
                            "hidden": true
                          },
                          "propertyOrder": 10
                        },
                        "background": {
                          "type": "string",
                          "id": "/properties/settings/properties/colors/properties/menu/properties/background",
                          "title": "Default Background",
                          "default": "#F6F4E2",
                          "format": "color",
                          "description": "Description for 'background' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/background'",
                          "options": {
                            "hidden": false
                          },
                          "propertyOrder": 20
                        },
                        "textcolor": {
                          "type": "string",
                          "id": "/properties/settings/properties/colors/properties/menu/properties/textcolor",
                          "title": "Textcolor",
                          "default": "#70420D",
                          "format": "color",
                          "description": "Description for 'textcolor' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/textcolor'",
                          "options": {
                            "hidden": false
                          },
                          "propertyOrder": 30
                        },
                        "mobile": {
                          "type": "object",
                          "id": "/properties/settings/properties/colors/properties/menu/properties/mobile",
                          "title": "Mobile App View",
                          "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": false,
                            "hidden": false
                          },
                          "defaultProperties": [
                            "textcolor",
                            "default",
                            "hover",
                            "focus"
                          ],
                          "properties": {
                            "textcolor": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/mobile/properties/textcolor",
                              "title": "Textcolor",
                              "default": "#EBEBD3",
                              "format": "color",
                              "description": "Description for 'textcolor' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/mobile/properties/textcolor'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 10
                            },
                            "default": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/mobile/properties/default",
                              "title": "Default",
                              "default": "#333",
                              "format": "color",
                              "description": "Description for 'default' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/mobile/properties/default'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 20
                            },
                            "hover": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/mobile/properties/hover",
                              "title": "Hover",
                              "default": "#70420D",
                              "format": "color",
                              "description": "Description for 'hover' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/mobile/properties/hover'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 30
                            },
                            "focus": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/mobile/properties/focus",
                              "title": "Focus",
                              "default": "#E4B363",
                              "format": "color",
                              "description": "Description for 'focus' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/mobile/properties/focus'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 40
                            }
                          },
                          "propertyOrder": 40
                        },
                        "desktop": {
                          "type": "object",
                          "id": "/properties/settings/properties/colors/properties/menu/properties/desktop",
                          "title": "Colors Desktop View",
                          "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": false,
                            "hidden": false
                          },
                          "defaultProperties": [
                            "default",
                            "hover",
                            "focus"
                          ],
                          "properties": {
                            "default": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/desktop/properties/default",
                              "title": "Default",
                              "default": "#E4B363",
                              "format": "color",
                              "description": "Description for 'default' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/desktop/properties/default'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 10
                            },
                            "hover": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/desktop/properties/hover",
                              "title": "Hover",
                              "default": "#d18428",
                              "format": "color",
                              "description": "Description for 'hover' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/desktop/properties/hover'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 20
                            },
                            "focus": {
                              "type": "string",
                              "id": "/properties/settings/properties/colors/properties/menu/properties/desktop/properties/focus",
                              "title": "Focus",
                              "default": "#472a07",
                              "format": "color",
                              "description": "Description for 'focus' Type: 'string' Path: '/properties/settings/properties/colors/properties/menu/properties/desktop/properties/focus'",
                              "options": {
                                "hidden": false
                              },
                              "propertyOrder": 30
                            }
                          },
                          "propertyOrder": 50
                        }
                      },
                      "propertyOrder": 20
                    }
                  },
              },
              "configcode": {
                  "type": "string",
                  "id": "/properties/settings/properties/configcode",
                  "title": "Configuration Code",
                  "description": "The configuration code will be placed in the script-tag at the end of the generated HTML file. The code could contain e.g. some constants of some functions init calls for Javascript instances.",
                  "default": "// the configuration code can be used to create some constants, local functions or initialize some javascript objects.",
                  "propertyOrder": 140,
                  "format": "javascript"
              },
              "jsfiles": {
                    "type": "array",
                    "id": "/properties/settings/properties/jsfiles",
                    "title": "Javascript Libraries",
                    "format": "tabs",
                    "options": {
                        "disable_collapse": false,
                        "disable_array_add": false,
                        "disable_array_delete": false,
                        "disable_array_reorder": false,
                        "disable_properties": true,
                        "collapsed": false,
                        "hidden": false
                    },
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/jsfiles/items",
                        "title": "JS Files",
                        "headerTemplate": "({{i1}}) {{self.filepath}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": false,
                            "hidden": false
                        },
                        "defaultProperties": [
                          "filepath",
                          "istemplate",
                          "code"
                        ],
                        "properties": {
                            "filepath": {
                                "type": "string",
                                "id": "/properties/settings/properties/jsfiles/items/properties/filename",
                                "title": "Filename",
                                "default": "myfile.js",
                                "format": "text",
                                "description": "Description for 'filename' Type: 'string' Path: '/properties/settings/properties/jsfiles/items/properties/filename'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "istemplate": {
                                "type": "string",
                                "title": "Use Javascript as Template",
                                "propertyOrder": 15,
                                "default": "yes",
                                "id": "/properties/settings/properties/jsfiles/items/properties/istemplate",
                                "$ref": "#/definitions/yesno"
                            },
                            "code": {
                                "type": "string",
                                "id": "/properties/settings/properties/jsfiles/items/properties/code",
                                "title": "Code",
                                "default": "// Code of Javascript library ",
                                "format": "javascript",
                                "description": "These Javascript files are imported with Javascript tag in the main index.html",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 20
                            }
                        }
                    },
                    "propertyOrder": 40
                },
                "htmlfiles": {
                    "type": "array",
                    "id": "/properties/settings/properties/htmlfiles",
                    "title": "HTML Files of AppLSAC",
                    "format": "tabs",
                    "options": {
                        "disable_collapse": false,
                        "disable_array_add": false,
                        "disable_array_delete": false,
                        "disable_array_reorder": false,
                        "disable_properties": true,
                        "collapsed": false,
                        "hidden": false
                    },
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/htmlfiles/items",
                        "title": "HTML Files",
                        "headerTemplate": "({{i1}}) {{self.filepath}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": true,
                            "hidden": false
                        },
                        "defaultProperties": [
                          "filepath",
                          "istemplate",
                          "code"
                        ],
                        "properties": {
                            "filepath": {
                                "type": "string",
                                "id": "/properties/settings/properties/htmlfiles/items/properties/filename",
                                "title": "Filename",
                                "default": "myfile.html",
                                "format": "text",
                                "description": "Description for 'filename' Type: 'string' Path: '/properties/settings/properties/htmlfiles/items/properties/filename'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "istemplate": {
                                "type": "string",
                                "title": "Use HTML File as Template",
                                "propertyOrder": 15,
                                "default": "yes",
                                "id": "/properties/settings/properties/htmlfiles/items/properties/istemplate",
                                "$ref": "#/definitions/yesno"
                            },
                            "code": {
                                "type": "string",
                                "id": "/properties/settings/properties/htmlfiles/items/properties/code",
                                "title": "HTML Code of Page",
                                "default": "<!-- HTML File Code of Page -->",
                                "format": "html",
                                "description": "This is HTML code of the page that is toggled by a Menu event.",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 20
                            }
                        }
                    },
                    "propertyOrder": 50
                },
                "cssfiles": {
                    "type": "array",
                    "id": "/properties/settings/properties/cssfiles",
                    "title": "CSS Files",
                    "format": "tabs",
                    "options": {
                        "disable_collapse": false,
                        "disable_array_add": false,
                        "disable_array_delete": false,
                        "disable_array_reorder": false,
                        "disable_properties": true,
                        "collapsed": false,
                        "hidden": false
                    },
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/cssfiles/items",
                        "title": "CSS Files ",
                        "headerTemplate": "({{i1}}) {{self.filepath}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": false,
                            "hidden": false
                        },
                        "defaultProperties": [
                            "filepath",
                            "istemplate",
                            "code"
                        ],
                        "properties": {
                            "filepath": {
                                "type": "string",
                                "id": "/properties/settings/properties/cssfiles/items/properties/filename",
                                "title": "CSS Filename",
                                "default": "myfile.css",
                                "format": "text",
                                "description": "Description for 'filename' Type: 'string' Path: '/properties/settings/properties/cssfiles/items/properties/filename'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "istemplate": {
                                "type": "string",
                                "title": "Use CSS File as Template",
                                "propertyOrder": 15,
                                "default": "yes",
                                "id": "/properties/settings/properties/cssfiles/items/properties/istemplate",
                                "$ref": "#/definitions/yesno"
                            },
                            "code": {
                                "type": "string",
                                "id": "/properties/settings/properties/cssfiles/items/properties/code",
                                "title": "CSS Definitions",
                                "default": "/* CSS File Definitions */",
                                "format": "css",
                                "description": "These styles are imported in the main index.html",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 20
                            }
                        }
                    },
                    "propertyOrder": 60
                }
            }
        }
    }
};


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
            "folder-open-o",
            "floppy-o",
            "pencil-square-o",
            "calendar",
            "camera",
            "clone",
            "line-chart",
            "eye-slash",
            "fa-picture-o",
            "envelope-o",
            "minus",
            "mobile",
            "phone",
            "plus",
            "print",
            "power-off",
            "refresh",
            "search",
            "cog",
            "eye",
            "volume-up",
            "trash",
            "upload",
            "times"
        ],
        "options": {
          "enum_titles": [
            " ",
            "Home",
            "Load",
            "Save",
            "Edit",
            "Exit",
            "Calendar",
            "Camera",
            "Clone",
            "Chart/Diagrams",
            "Hide",
            "Images",
            "Mail",
            "Minus",
            "Mobile Phone",
            "Phone",
            "Plus",
            "Print",
            "Quit/Exit",
            "Refresh",
            "Search",
            "Settings",
            "Show/View",
            "Sound",
            "Trash",
            "Upload",
            "X-Exit"
          ]
        }
      },
      "target": {
        "type": "string",
        "default": "",
        "enum":[
            " ",
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
    "id": "https://niebert.github.io/json-editor",
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
                "comment",
                "colors",
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
                    "description": "Use as appname (uppercase character allowed, e.g.'MyWebApp') - it is used for exported files as names e.g. 'mywebapp.json'."
                },
                "apptitle": {
                    "type": "string",
                    "id": "/properties/data/properties/apptitle",
                    "title": "App Title",
                    "propertyOrder": 20,
                    "format": "text",
                    "default": "My web-based App"
                },
                "comment": {
                    "type": "string",
                    "id": "/properties/data/properties/comment",
                    "title": "Description for the App",
                    "propertyOrder": 30,
                    "description": "Describe the main application of this class for the software development. This description will be used to generate a documentation of the UML definition.",
                    "$ref": "#/definitions/comment"
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
                                    "content"
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
                                    "html": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/html",
                                        "title": "Content",
                                        "default": "<!-- place content of the page here -->",
                                        "format": "html",
                                        "description": "This is the HTML code for the page, that is displayed, when the user clicks on the menu item of type 'page'.",
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
                                    "code": {
                                        "type": "string",
                                        "id": "/properties/data/properties/menuitems/items/properties/code",
                                        "title": "Javascript Code for Event",
                                        "default": "vApp.do_something('myparam',34)",
                                        "format": "javascript",
                                        "description": "The Javascript code will be executed if the user clicks on the menu item of type 'jscall'.",
                                        "options": {
                                            "hidden": false
                                        },
                                        "propertyOrder": 30
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
                "extension4code",
                "extension4json",
                "colors",
                "configcode",
                "jsfiles",
                "htmlfiles",
                "cssfiles"
            ],
            "properties": {
              "extension4code": {
                "type": "string",
                "id": "/properties/settings/properties/extension4code",
                "title": "Extension for Generated Menu:",
                "default": ".zip",
                "format": "text",
                "propertyOrder": 10,
                "size":12,
                "description": "When WebApp generates code, it stores a generated file in the programming language '"+vProgLanguage+"' with this file extension"
              },
              "extension4json": {
                "type": "string",
                "id": "/properties/settings/properties/extension4json",
                "title": "Extension for saved JSON:",
                "default": ".json",
                "format": "text",
                "propertyOrder": 20,
                "size":12,
                "description": "JSON Editor stores a JSON file with this file extension"
              },
              "configcode": {
                  "type": "string",
                  "id": "/properties/settings/properties/configcode",
                  "title": "Configuration Code",
                  "description": "The configuration code will be placed in the script-tag at the end of the generated HTML file. The code could contain e.g. some constants of some functions init calls for Javascript instances.",
                  "default": "// the configuration code can be used to create some constants, local functions or initialize some javascript objects.",
                  "propertyOrder": 30,
                  "format": "javascript"
              },
              "colors": {
                  "type": "object",
                  "id": "/properties/settings/properties/colors",
                  "title": "Colors",
                  "propertyOrder": 40,
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
                              "default": "#333000",
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
                        "headerTemplate": "({{i1}}) {{self.name}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": false,
                            "hidden": false
                        },
                        "defaultProperties": [
                            "name",
                            "content"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/jsfiles/items/properties/name",
                                "title": "Filename",
                                "default": "myfile.js",
                                "format": "text",
                                "description": "Description for 'name' Type: 'string' Path: '/properties/settings/properties/jsfiles/items/properties/name'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "content": {
                                "type": "string",
                                "id": "/properties/settings/properties/jsfiles/items/properties/content",
                                "title": "Content",
                                "default": "// Content of imported Javascript library ",
                                "format": "javascript",
                                "description": "Description for 'content' Type: 'string' Path: '/properties/settings/properties/jsfiles/items/properties/content'",
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
                        "headerTemplate": "({{i1}}) {{self.name}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": true,
                            "hidden": false
                        },
                        "defaultProperties": [
                            "name",
                            "content"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/htmlfiles/items/properties/name",
                                "title": "Filename",
                                "default": "myfile.html",
                                "format": "text",
                                "description": "Description for 'name' Type: 'string' Path: '/properties/settings/properties/htmlfiles/items/properties/name'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "content": {
                                "type": "string",
                                "id": "/properties/settings/properties/htmlfiles/items/properties/content",
                                "title": "Content",
                                "default": "<!-- HTML File Content -->",
                                "format": "html",
                                "description": "Description for 'content' Type: 'string' Path: '/properties/settings/properties/htmlfiles/items/properties/content'",
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
                        "headerTemplate": "({{i1}}) {{self.name}}",
                        "options": {
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "collapsed": true,
                            "hidden": false
                        },
                        "defaultProperties": [
                            "name",
                            "content"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/cssfiles/items/properties/name",
                                "title": "CSS Filename",
                                "default": "myfile.css",
                                "format": "text",
                                "description": "Description for 'name' Type: 'string' Path: '/properties/settings/properties/cssfiles/items/properties/name'",
                                "options": {
                                    "hidden": false
                                },
                                "propertyOrder": 10
                            },
                            "content": {
                                "type": "string",
                                "id": "/properties/settings/properties/cssfiles/items/properties/content",
                                "title": "CSS Definitions",
                                "default": "/* CSS File Content */",
                                "format": "css",
                                "description": "Description for 'content' Type: 'string' Path: '/properties/settings/properties/cssfiles/items/properties/content'",
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

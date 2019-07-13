
vDataJSON["menu_schema"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "options":{
      "disable_collapse": false,
      "disable_properties": true,
      "disable_edit_json": false
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
              "public",
              "private"
          ],
          "default":"public"
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
        "default": "",
        "enum":[
            "",
            "fa fa-folder-open-o",
            "fa fa-floppy-o",
            "a fa-cog",
            "fa fa-trash"
        ],
        "options": {
          "enum_titles": [
            "NO ICON",
            "Load",
            "Save",
            "Settings",
            "Trash"
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
              "disable_properties": true
            },
            "defaultProperties": [
                "appname",
                "apptitle",
                "comment",
                "reposinfo",
                "attributes",
                "methods"
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
                "colors": {
                    "type": "object",
                    "id": "/properties/data/properties/colors",
                    "title": "Colors",
                    "options": {
                      "disable_collapse": false,
                      "disable_edit_json": false,
                      "disable_properties": false,
                      "collapsed": false,
                      "hidden": false
                    },
                    "defaultProperties": [
                      "app",
                      "menu"
                    ],
                    "properties": {
                      "app": {
                        "type": "object",
                        "id": "/properties/data/properties/colors/properties/app",
                        "title": "App",
                        "options": {
                          "disable_collapse": false,
                          "disable_edit_json": false,
                          "disable_properties": false,
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
                            "id": "/properties/data/properties/colors/properties/app/properties/background",
                            "title": "Background",
                            "default": "#F6F4E2",
                            "format": "color",
                            "description": "Description for 'background' Type: 'string' Path: '/properties/data/properties/colors/properties/app/properties/background'",
                            "options": {
                              "hidden": false
                            },
                            "propertyOrder": 10
                          },
                          "textcolor": {
                            "type": "string",
                            "id": "/properties/data/properties/colors/properties/app/properties/textcolor",
                            "title": "Textcolor",
                            "default": "#70420D",
                            "format": "color",
                            "description": "Description for 'textcolor' Type: 'string' Path: '/properties/data/properties/colors/properties/app/properties/textcolor'",
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
                        "id": "/properties/data/properties/colors/properties/menu",
                        "title": "Menu",
                        "options": {
                          "disable_collapse": false,
                          "disable_edit_json": false,
                          "disable_properties": false,
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
                            "id": "/properties/data/properties/colors/properties/menu/properties/toggleleft",
                            "title": "Toggle for Menu left",
                            "format": "checkbox",
                            "default": false,
                            "description": "A description for 'toggleleft'  Type: 'boolean'",
                            "options": {
                              "hidden": false
                            },
                            "propertyOrder": 10
                          },
                          "background": {
                            "type": "string",
                            "id": "/properties/data/properties/colors/properties/menu/properties/background",
                            "title": "Background",
                            "default": "#F6F4E2",
                            "format": "color",
                            "description": "Description for 'background' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/background'",
                            "options": {
                              "hidden": false
                            },
                            "propertyOrder": 20
                          },
                          "textcolor": {
                            "type": "string",
                            "id": "/properties/data/properties/colors/properties/menu/properties/textcolor",
                            "title": "Textcolor",
                            "default": "#70420D",
                            "format": "color",
                            "description": "Description for 'textcolor' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/textcolor'",
                            "options": {
                              "hidden": false
                            },
                            "propertyOrder": 30
                          },
                          "mobile": {
                            "type": "object",
                            "id": "/properties/data/properties/colors/properties/menu/properties/mobile",
                            "title": "Mobile",
                            "options": {
                              "disable_collapse": false,
                              "disable_edit_json": false,
                              "disable_properties": false,
                              "collapsed": true,
                              "hidden": false
                            },
                            "defaultProperties": [
                              "texcolor",
                              "default",
                              "hover",
                              "focus"
                            ],
                            "properties": {
                              "texcolor": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/mobile/properties/texcolor",
                                "title": "Texcolor",
                                "default": "#EBEBD3",
                                "format": "color",
                                "description": "Description for 'texcolor' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/mobile/properties/texcolor'",
                                "options": {
                                  "hidden": false
                                },
                                "propertyOrder": 10
                              },
                              "default": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/mobile/properties/default",
                                "title": "Default",
                                "default": "#333000",
                                "format": "color",
                                "description": "Description for 'default' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/mobile/properties/default'",
                                "options": {
                                  "hidden": false
                                },
                                "propertyOrder": 20
                              },
                              "hover": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/mobile/properties/hover",
                                "title": "Hover",
                                "default": "#70420D",
                                "format": "color",
                                "description": "Description for 'hover' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/mobile/properties/hover'",
                                "options": {
                                  "hidden": false
                                },
                                "propertyOrder": 30
                              },
                              "focus": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/mobile/properties/focus",
                                "title": "Focus",
                                "default": "#E4B363",
                                "format": "color",
                                "description": "Description for 'focus' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/mobile/properties/focus'",
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
                            "id": "/properties/data/properties/colors/properties/menu/properties/desktop",
                            "title": "Desktop",
                            "options": {
                              "disable_collapse": false,
                              "disable_edit_json": false,
                              "disable_properties": false,
                              "collapsed": true,
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
                                "id": "/properties/data/properties/colors/properties/menu/properties/desktop/properties/default",
                                "title": "Default",
                                "default": "#E4B363",
                                "format": "color",
                                "description": "Description for 'default' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/desktop/properties/default'",
                                "options": {
                                  "hidden": false
                                },
                                "propertyOrder": 10
                              },
                              "hover": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/desktop/properties/hover",
                                "title": "Hover",
                                "default": "#d18428",
                                "format": "color",
                                "description": "Description for 'hover' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/desktop/properties/hover'",
                                "options": {
                                  "hidden": false
                                },
                                "propertyOrder": 20
                              },
                              "focus": {
                                "type": "string",
                                "id": "/properties/data/properties/colors/properties/menu/properties/desktop/properties/focus",
                                "title": "Focus",
                                "default": "#472a07",
                                "format": "color",
                                "description": "Description for 'focus' Type: 'string' Path: '/properties/data/properties/colors/properties/menu/properties/desktop/properties/focus'",
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
                    "propertyOrder": 35
                },
                "reposinfo": {
                    "type": "object",
                    "title": "Repository Info",
                    "propertyOrder": 40,
                    "id": "/properties/data/properties/reposinfo",
                    "options": {
                      "collapsed": true,
                      "disable_properties": true
                    },
                    "defaultProperties": [
                        "JSCC_type",
                        "JSCC_version",
                        "repository",
                        "static",
                        "debugheader",
                        "require_classes",
                        "author",
                        "email",
                        "created",
                        "modified",
                        "configcode",
                        "requirelist"
                    ],
                    "properties": {
                        "JSCC_type": {
                          "type": "string",
                          "id": "/properties/data/properties/reposinfo/properties/JSCC_type",
                          "title": "JSCC Type",
                          "options": {
                            "hidden": true
                          },
                          "propertyOrder": 10,
                          "default": "CLASS",
                          "format": "text",
                          "description": "Hidden JSON attribute to handle with JavascriptClassCreator JSCC as CLASS - allows integration into UML based Software Development Framework"
                        },
                        "JSCC_version": {
                          "type": "string",
                          "id": "/properties/data/properties/reposinfo/properties/JSCC_type",
                          "title": "JSCC Version",
                          "propertyOrder": 20,
                          "options": {
                            "hidden": true
                          },
                          "default": "2",
                          "format": "text",
                          "description": "Hidden JSON attribute to handle the version of JSON with JavascriptClassCreator JSCC as CLASS - allows integration into UML based Software Development Framework"
                        },
                        "repository": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/repository",
                            "title": "URL Repository",
                            "propertyOrder": 30,
                            "default": "https://www.github.com/author/NewClass",
                            "format": "text",
                            "description": "Enter e.g. the Link to your GitHub repository."
                        },
                        "require_classes": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/require_classes",
                            "$ref": "#/definitions/yesno",
                            "title": "Require Classes NPM:",
                            "propertyOrder": 40,
                            "description": "Set to 'Yes' if you want to insert the require commands for used classes in the generated code and add a 'module.exports' at the end of the generated code"
                        },
                        "debugheader": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/debugheader",
                            "$ref": "#/definitions/yesno",
                            "title": "Debug Headers:",
                            "propertyOrder": 60,
                            "default": "no",
                            "description": "If set to 'Yes' the generated output of the app will have a debug comments and headers for easier debugging"
                        },
                        "requirelist": {
                            "title":"List of Libraries",
                            "propertyOrder": 70,
                            "type": "array",
                            "id": "/properties/data/properties/reposinfo/properties/requirelist",
                            "format": "table",
                            "description": "Add required libraries for the App. This creates a SCRIPT-tag in the generated HTML code for each module - add the required libraries to the  'js' folder in exported zip file.",
                            "options": {
                              "collapsed": false
                            },
                            "items": {
                              "type": "object",
                              "title": "Module",
                              "id": "/properties/requirelist/items",
                              "defaultProperties": [
                                  "module",
                                  "variable"
                              ],
                              "properties": {
                                "variable": {
                                    "type": "string",
                                    "id": "/properties/requirelist/items/properties/variable",
                                    "title": "Variable",
                                    "default": "Handlebars",
                                    "format": "text"
                                },
                                "module": {
                                      "type": "string",
                                      "id": "/properties/requirelist/items/properties/module",
                                      "title": "Require Module",
                                      "default": "handlebars",
                                      "format": "text"
                                  }
                              }
                          }
                        },
                        "author": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/author",
                            "title": "Author of Class",
                            "propertyOrder": 80,
                            "default": "My Name",
                            "format": "text"
                        },
                        "email": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/email",
                            "title": "e-Mail:",
                            "propertyOrder": 90,
                            "default": "name@example.com",
                            "format": "text"
                        },
                        "created": {
                            "title": "Created:",
                            "propertyOrder": 100,
                            "type": "string",
                            "default": getDate(),
                            "id": "/properties/data/properties/reposinfo/properties/created",
                            "format": "text"
                        },
                        "modified": {
                            "title": "Modified:",
                            "propertyOrder": 110,
                            "type": "string",
                            "default": getDate(),
                            "id": "/properties/data/properties/reposinfo/properties/modified",
                            "format": "text"
                        },
                        "configcode": {
                            "type": "string",
                            "id": "/properties/data/properties/reposinfo/properties/configcode",
                            "title": "Configuration Code",
                            "description": "The configuration code will be placed before the constructor of class and could contain e.g. some constants of some functions that are not methods of the class and are accessible in the class only.",
                            "default": "// the configuration code can be used to create some constants or local functions",
                            "propertyOrder": 120,
                            "format": vProgLanguage
                        }

                    }
                },
                "attributes": {
                    "title": "Attribute",
                    "propertyOrder": 50,
                    "type": "array",
                    "format": "table",
                    "uniqueItems": true,
                    "id": "/properties/data/properties/attributes",
                    "options": {
                      "collapsed": false
                    },
                    "items": {
                        "title": "Attrib",
                        "type": "object",
                        "id": "/properties/data/properties/attributes/items",
                        "headerTemplate": "{{self.name}}",
                        "format": "table",
                        "defaultProperties": [
                            "visibility",
                            "name",
                            "init",
                            "class",
                            "comment"
                        ],
                        "properties": {
                            "visibility": {
                                "type": "string",
                                "id": "/properties/data/properties/attributes/items/properties/visibility",
                                "$ref": "#/definitions/visibility"
                            },
                            "name": {
                                "type": "string",
                                "id": "/properties/data/properties/attributes/items/properties/name",
                                "title": "Name",
                                "default": "aMyAttrib",
                                "format": "text"
                            },
                            "init": {
                                "type": "string",
                                "id": "/properties/data/properties/attributes/items/properties/init",
                                "title": "Init",
                                "default": "",
                                "format": "text"
                            },
                            "class": {
                                "id": "/properties/data/properties/attributes/items/properties/class",
                                "title": "Class",
                                "$ref": "#/definitions/selectorclass"
                            },
                            "comment": {
                                "type": "string",
                                "id": "/properties/data/properties/attributes/items/properties/comment",
                                "title": "Comment",
                                "$ref": "#/definitions/comment",
                                "default": "This attribute stores ...",
                                "format": "text",
                            }
                        }
                    }
                },
                "methods": {
                    "type": "array",
                    "title":"Methods",
                    "propertyOrder": 60,
                    "id": "/properties/data/properties/methods",
                    "format": "tabs",
                    "uniqueItems": true,
                    "options": {
                      "collapsed": false
                    },
                    "items": {
                        "type": "object",
                        "title": "Method",
                        "headerTemplate": "{{self.name}}()",
                        "id": "/properties/data/properties/methods/items",
                        "defaultProperties": [
                            "visibility",
                            "name",
                            "parameter",
                            "return",
                            "comment",
                            "code"
                        ],
                        "properties": {
                            "visibility": {
                                "type": "string",
                                "id": "/properties/data/properties/methods/items/properties/visibility",
                                "title": "Visibility",
                                "propertyOrder": 10,
                    						"$ref": "#/definitions/visibility"
                            },
                            "name": {
                                "type": "string",
                                "id": "/properties/data/properties/methods/items/properties/name",
                                "title": "Method Name",
                                "default": "myMethod",
                                "propertyOrder": 20,
                    						"format": "text"
                            },
                            "parameter": {
                                "title": "Parameter",
                                "type": "array",
                                "id": "/properties/data/properties/methods/items/properties/parameter",
                                //"format": "tabs",
                                "format": "table",
                                "propertyOrder": 30,
                    						"uniqueItems": true,
                                "options": {
                                  "collapsed": true
                                },
                                "items": {
                                    "title":"Param",
                                    "type": "object",
                                    "id": "/properties/data/properties/methods/items/properties/parameter/items",
                                    "defaultProperties": [
                                        "name",
                                        "class",
                                        "comment"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/data/properties/methods/items/properties/parameter/items/properties/name",
                                            "title": "Parameter",
                                            "default": "pVar",
                                            "minLength": 1,
                                            "propertyOrder": 10,
                                						"format": "text"
                                        },
                                        "class": {
                                            "type": "string",
                                            "id": "/properties/data/properties/methods/items/properties/parameter/items/properties/class",
                                            "title": "Class",
                                            "propertyOrder": 20,
                                						"$ref": "#/definitions/selectorclass"
                                        },
                                        "comment": {
                                            "type": "string",
                                            "id": "/properties/data/properties/methods/items/properties/parameter/items/properties/comment",
                                            "$ref": "#/definitions/comment",
                                            "propertyOrder": 30,
                                						"default": "the parameter stores ..."
                                            //"format": "text"
                                        }
                                    }
                                }
                            },
                            "return": {
                                "type": "string",
                                "id": "/properties/data/properties/methods/items/properties/return",
                                "title": "Return",
                                "propertyOrder": 40,
                    						"$ref": "#/definitions/selectorclass"
                            },
                            "code": {
                                "type": "string",
                                "id": "/properties/data/properties/methods/items/properties/code",
                                "title": "Code - Language: '"+vProgLanguage+"'",
                                "default": "// insert your code here",
                                "propertyOrder": 50,
                    						"format": vProgLanguage
                            },
                            "comment": {
                                "type": "string",
                                "id": "/properties/data/properties/methods/items/properties/comment",
                                "title":"Comment",
                                "format":"textarea",
                                "$ref": "#/definitions/comment",
                                "default": "the method performs ...",
                                "propertyOrder": 60,
                    						"description": "Describe the purpose of the method. This description will be used to generate a documentation of the UML definition."
                            }

                        }
                    }
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
                "classlist",
                "pagemenuitems",
                "linkmenuitems",
                "basemenuitems"
            ],
            "properties": {
              "extension4code": {
                "type": "string",
                "id": "/properties/settings/properties/extension4code",
                "title": "Extension for Generated Code:",
                "default": ".js",
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
                "propertyOrder": 10,
                "size":12,
                "description": "JSON Editor stores a JSON file with this file extension"
              },
              "classlist": {
                    "type": "array",
                    //"id": "/properties/settings/properties/classlist",
                    "title": "Select List of Classes",
                    "format": "table",
                    "propertyOrder": 20,
        						"options": {
                      "collapsed": true,
                      "hidden": true
                    },
                    "items": {
                        "type": "string",
                        "id": "/properties/settings/properties/classlist/items",
                        "title": "Class",
                        "default": " ",
                        "format": "text"
                    },
                    "default": [
                        " ",
                        "Array",
                        "Boolean",
                        "Document",
                        "Float",
                        "Function",
                        "Hash",
                        "Integer",
                        "Object",
                        "RegularExp",
                        "String"
                      ],
                },
                "pagemenuitems": {
                    "type": "array",
                    //"id": "/properties/settings/properties/pagemenuitems",
                    "title": "Local List of Classes",
                    "description":"A local class is a module that is required and implemented on your local filesystem (and NOT installed from a remote repository via NPM). The pathname prefix is defined in 'Repository Info'. The prefix is concatenated for all local modules that are listed in  Local Classes.",
                    "format": "table",
                    "propertyOrder": 30,
        						"options": {
                      "collapsed": true
                    },
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/pagemenuitems/items",
                        "title": "Local Class",
                        "headerTemplate": "{{self.name}}()",
                        "defaultProperties": [
                            "name",
                            "initvalue",
                            "repo"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/pagemenuitems/items/properties/name",
                                "title": "Base Class Name",
                                "default": "",
                                "propertyOrder": 10,
                                "format": "text"
                            },
                            "initvalue": {
                                "type": "string",
                                "id": "/properties/settings/properties/pagemenuitems/items/properties/initvalue",
                                "title": "Init Value",
                                "default": "",
                                "propertyOrder": 20,
                                "format": "text"
                            },
                            "repo": {
                                "type": "string",
                                "id": "/properties/settings/properties/basemenuitems/items/properties/repo",
                                "title": "Module Name (repo)",
                                "default": "",
                                "propertyOrder": 20,
                                "format": "text"
                            }
                        }
                    }
                },
                "linkmenuitems": {
                    "type": "array",
                    "id": "/properties/settings/properties/linkmenuitems",
                    "title": "Remote Link Menu Items",
                    "format": "table",
                    "propertyOrder": 40,
        						"options": {
                      "collapsed": true
                    },
                    "description":"A remote link menu item refers to a website or server outside the WebApp e.g. displayed in a new window.",
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/linkmenuitems/items",
                        "title": "Remote Class",
                        "headerTemplate": "{{self.name}}()",
                        "defaultProperties": [
                            "name",
                            "link4item",
                            "target4link"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/linkmenuitems/items/properties/name",
                                "title": "Link Title",
                                "default": "",
                                "propertyOrder": 10,
                    						"format": "text"
                            },
                            "link4item": {
                                "type": "string",
                                "id": "/properties/settings/properties/linkmenuitems/items/properties/link4item",
                                "title": "Link/URL",
                                "default": "",
                                "propertyOrder": 20,
                                "format": "text"
                            },
                            "target4link": {
                                "type": "string",
                                "id": "/properties/settings/properties/basemenuitems/items/properties/target4link",
                                "title": "Target for Link",
                                "default": "",
                                "propertyOrder": 30,
                                "format": "text"
                            }
                        }
                    }
                },
                "basemenuitems": {
                    "type": "array",
                    "id": "/properties/settings/properties/basemenuitems",
                    "title": "List of Basic Menu Items",
                    "format": "tabs",
                    "uniqueItems": true,
                    "propertyOrder": 60,
        						"options": {
                      "collapsed": true
                    },
                    "description":"A basic menu items provide by basic user interfaces in an application. These are components for loading or saving files.",
                    "items": {
                        "type": "object",
                        "id": "/properties/settings/properties/basemenuitems/items",
                        "title": "Basic Menu Item",
                        "headerTemplate": "Basic MI: {{self.name}}",
                        "defaultProperties": [
                          "name",
                          "icon",
                          "codetemplate"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "id": "/properties/settings/properties/basemenuitems/items/properties/name",
                                "title": "Basic Item Name",
                                "default": "",
                                "propertyOrder": 10,
                    						"format": "text"
                            },
                            "icon": {
                                "type": "string",
                                "id": "/properties/settings/properties/basemenuitems/items/properties/icon",
                                "title": "Icon",
                                "$ref": "#/definitions/selectoricon",
                                "default": "",
                                "propertyOrder": 20,
                                "format": "text"
                            },
                            "codetemplate": {
                                "type": "string",
                                "id": "/properties/settings/properties/basemenuitems/items/properties/codetemplate",
                                "title": "Code - Template: '"+vProgLanguage+"'",
                                "default": "// insert your code template here",
                                "propertyOrder": 30,
                    						"format": vProgLanguage
                            }

                        }
                    }
                }
            }
        }
    }
};

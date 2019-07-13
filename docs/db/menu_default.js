vDataJSON["menu_default"]={
    "data":{
      "appname": "NewMenu",
      "apptitle": "My new Hamburger Menu",
      "comment": "What does the app do?",
      "colors": {
        "app":{
         "background": "#F6F4E2",
         "textcolor": "#70420D"
        },
        "menu":{
             "toggleleft": false,
             "background": "#F6F4E2",
             "textcolor": "#70420D",
             "mobile":{
                 "texcolor": "#EBEBD3",
                 "default":"#333000",
                 "hover":"#70420D",
                 "focus":"#E4B363"
             },
             "desktop":{
                 "default":"#E4B363",
                 "hover":"#d18428",
                 "focus":"#472a07"
             }
          }
      },
      "reposinfo": {
          "repository": "",
          "require_classes": "yes",
          "static": "no",
          "author": "",
          "email": "",
          "created": getDateTime(),
          "modified": getDateTime(),
          "debugheader": "no",
          "requirelist": [
            {
              "module":"jquery",
              "variable":"$"
            }
  		  ]
      },
      "attributes": [],
      "methods": []
    },
    "settings":{
      "umleditor": "https://niebert.github.io/ClassEditorUML",
      "extension4code":".js",
      "extension4json":"_uml.json",
      "localclasslist": [
        {
          "name": "LinkParam",
          "initvalue": "new LinkParam()",
          "repo": "linkparam"
        }
      ],
      "linkmenuitems": [
        {
          "name": "JSONEditor",
          "initvalue": "new JSONEditor4Code()",
          "repo": "jsoneditor4code"
        }
      ],
      "basicmenuitems": [
          {
            "name": "Array",
            "initvalue": "[]"
          },
          {
              "name": "Boolean",
              "initvalue": "true"
          },
          {
              "name": "Float",
              "initvalue": "0.0"
          },
          {
              "name": "Function",
              "initvalue": "function my_fun() {}"
          },
          {
              "name": "Document",
              "initvalue": "document"
          },
          {
              "name": "Integer",
              "initvalue": "0"
          },
          {
              "name": "String",
              "initvalue": "\"\""
          },
          {
              "name": "Hash",
              "initvalue": "{}"
          },
          {
              "name": "Object",
              "initvalue": "null"
          },
          {
              "name": "RegularExp",
              "initvalue": "/search/g"
          }
      ]
    }
};

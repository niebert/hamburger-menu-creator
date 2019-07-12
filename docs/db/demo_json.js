vDataJSON["menu_demo"]= {
    "data":{
      "appname": "NewMenu",
      "apptitle": "My new Hamburger Menu",
      "comment": "What does the app do?",
      "reposinfo": {
          "repository": "https://www.github.com/author/MyMenu",
          "require_libraries": "yes",
          "author": "My Name",
          "email": "name@example.com",
          "created": "23.04.2018",
          "modified": "01.05.2018",
          "requirelist": [
            {
              "module":"jquery",
              "variable":"$"
            }
          ]
      },
      "attributes": [
          {
              "visibility": "private",
              "name": "aMyAttrib",
              "init": "0.0",
              "class": "Float",
              "comment": "What do you stored in this attribute?"
          },
          {
              "visibility": "public",
              "name": "aMyAttrib2",
              "init": "{}",
              "class": "Hash",
              "comment": "What do you stored in this attribute?"
          }
      ],
      "methods": [
          {
              "visibility": "private",
              "name": "myMethod",
              "parameter": [
                  {
                      "name": "pVar1",
                      "class": "String",
                      "comment": "What do you stored in this attribute?"
                  },
                  {
                      "name": "pVar2",
                      "class": "RegularExp",
                      "comment": "REG Line\nEX Line\nWhat do you stored in this attribute?"
                  }
              ],
              "return": "Boolean",
              "comment": "What kind of process does this method perform?",
              "code": "pVar2 = pVar1 + pVar2;"
          }
      ]
    },
    "settings": {
      "classlist": [
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
      ],
      "pagemenuitems": [
          "App",
          "AppAbstract"
      ],
      "linkmenuitems": [
          "LinkParam",
          "JSONEditor"
      ],
      "basicmenuitems": [
          "",
          "Array",
          "Boolean",
          "Float",
          "Function",
          "Hash",
          "Integer",
          "Object",
          "RegularExp",
          "String"
      ]
    }
}

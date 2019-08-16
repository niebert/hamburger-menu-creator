### Menu Icon Selector in Schema
The file `docs/schema/menu_schema.js` defines the JSON schema for the JSON editor. In the definitions part of the JSON schema the `selectonicon` defines the all icon selectors for the menu. If you want to add more [Font Awesome Icons 4.7.0](https://fontawesome.com/v4.7.0/icons/) to the selector expand the following part of the file `docs/schema/menu_schema.js` according to your needs.

The `enum_titles` define the name in the selector and the `enum` array defines the strings that are use

```json
"selectoricon": {
  "type": "string",
  "title": "Menu Icon",
  "default": "",
  "enum":[
      "",
      "folder-open-o",
      "floppy-o",
      "cog",
      "trash"
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
}
```
**Icon Contact:** Assume you want to add a menu item for sending a message to the developer, institution or company. The contact information provides e.g. an e-mail address, so we select from the [Font-Awesome Icons 4.7.0](https://fontawesome.com/v4.7.0/icons/) an appropriate icon. In this example we select the icon with the name `envelop-o` and some other icons that expand the `selectoricon` with the following lines.
```json
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
      "line-chart",
      "fa-picture-o",
      "envelope-o",
      "phone",
      "power-off",
      "search",
      "cog",
      "trash",
      "file-archive-o"
  ],
  "options": {
    "enum_titles": [
      " ",
      "Home",
      "Load",
      "Save",
      "Edit",
      "Calendar",
      "Camera",
      "Chart/Diagrams",
      "Images",
      "Mail",
      "Phone",
      "Quit/Exit",
      "Search",
      "Settings",
      "Trash",
      "ZIP"
    ]
  }
}
```

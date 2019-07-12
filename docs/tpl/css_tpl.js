vDataJSON["tpl"]["css"] = `
## Javascript Class: \`{{data.appname}}\`

{{{data.comment}}}
* created with [ClassEditorUML](https://niebert.github.io/ClassEditorUML) - Date: {{data.reposinfo.created}}
* last modifications at {{data.reposinfo.modified}}
* URL Class Editor for UML: https://niebert.github.io/ClassEditorUML
* File: \`js/{{filename data.appname}}.js\`
* UML-File: \`jscc/{{filename data.appname}}_uml.json\` - open with [ClassEditorUML](https://niebert.github.io/ClassEditorUML)
{{#ifcond data.superclassname "!=" " "}}
* Superclass: \`{{data.superclassname}}\` - code generation in \`ClassEditorUML\` can insert the require-commands automatically. For the settings expand the \`Repository Info\` in ClassEditorUML. You can set \`Require Classes NPM:\` to \`Yes\` and \`ClassEditorUML\` will include require command for super class. ClassEditorUML assumes, that the super class is a locally available.
\`\`\`javascript
const {{data.superclassname}} = require('./{{filename data.superclassname}}');
\`\`\`
The require command assumes the file \`{{filename data.appname}}.js\` in the same directory as \`{{filename data.superclassname}}.js\`.
{{/ifcond}}

### Diagram
{{#ifcond data.superclassname "!=" " "}}
The class  \`{{data.appname}}\` inherits all attributes and methods from superclass: \`{{data.superclassname}}\` please require NPM module for super class if it is not available locally by:
\`\`\`javascript
const {{data.superclassname}} = require('{{filename data.superclassname}}');
\`\`\`
{{/ifcond}}

|  {{data.appname}}               |
| ---------------------------- |
| {{{attribs_uml data.attributes}}} |
| {{{methods_uml data.methods}}}    |

### Create Instance of Class
Instances of the class \`{{data.appname}}\` can be generated with:
\`\`\`javascript
    var v{{data.appname}} = new {{data.appname}}();
\`\`\`

### Definition Methods - 2 Approaches
* If you want to assign definitions of methods for single instances individually, defined the method the following way. This approach allows to overwrite the method definition of single instances dynamically.
\`\`\`javascript
    this.my_method = function (pPar1,pPar2)
\`\`\`
* A prototype definition of methods for \`{{data.appname}}\` will be set the definition as prototye for all instances of the class. Alteration of the prototye definition with change the method definition of all instances of  \`{{data.appname}}\`. Use the following prototype definition for methods name for '{{data.appname}}'.
\`\`\`javascript
    {{data.appname}}.prototype.my_method = function (pPar1,pPar2)
\`\`\`
The prototype definition for methods consumes less memory for instances.

### Attributes: \`{{data.appname}}\`
For class \`{{data.appname}}\` the following attributes are defined:
{{#foreach data.attributes data}}

#### Attribute \`{{name}} : {{class}}\`
{{{comment}}}
* Visibility: \`{{visibility}}\`
* Class: \`{{class}}\`
{{#ifcond visibility "==" "public"}}
* Default Init: \`{{{init}}}\` set by \`my_instance.{{name}} = {{{init}}};\`
* Access of attribute in the code of methods by \`this.{{name}} = {{{init}}};\`
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Default Init: \`{{{init}}}\` set inside class by \`{{name}} = {{{init}}};\`
* Access of attribute in the code of methods by \`{{name}} = {{{init}}};\`
{{/ifcond}}
{{/foreach}}

### Methods: \`{{data.appname}}\`
For class \`{{data.appname}}\` the following methods are defined:
{{#foreach data.methods data}}

#### Method \`{{name}}({{#paramcall parameter}}{{/paramcall}})\`
{{{comment}}}
* Visibility: \`{{visibility}}\`
{{#ifcond return "!=" " "}}
* Returns: \`{{return}}\`
{{#ifcond visibility "==" "public"}}
* Call: \`var v{{return}}Ret = v{{data.appname}}.{{name}}({{#paramcall parameter}}{{/paramcall}});\` where \`v{{data.appname}} = new {{data.appname}}()\` is an instance of the class \`= {{data.appname}}\`.
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Call: \`var v{{return}}Ret = {{name}}({{#paramcall parameter}}{{/paramcall}});\`
{{/ifcond}}
{{/ifcond}}
{{#ifcond return "==" " "}}
{{#ifcond visibility "==" "public"}}
* Call: \`v{{data.appname}}.{{name}}({{#paramcall parameter}}{{/paramcall}});\` where \`v{{data.appname}} = new {{data.appname}}()\` is an instance of the class \`{{data.appname}}\`.
{{/ifcond}}
{{#ifcond visibility "==" "private"}}
* Call: \`{{name}}({{#paramcall parameter}}{{/paramcall}});\`
{{/ifcond}}
{{/ifcond}}
* Parameter List:
{{#each parameter}}
   * \`{{name}}:{{class}}\` {{{removereturn comment}}}
{{/each}}
{{/foreach}}
`;

// NodeJS: uncomment modules.export in last line
// module.export = {{classname}};

vDataJSON["tpl"]["html"] = `
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{data.appname}} - WebApp</title>
  <link rel="stylesheet" href="css/normalize.min.css">

  <link rel="stylesheet prefetch" href="css/font-awesome.min.css">
{{#foreach settings.cssfiles data}}
  <link rel="stylesheet" href="./css/{{{name}}}">
{{/foreach}}

  <link rel="stylesheet" href="css/style.css">


</head>

<body>

    <div class="wrapper">
        <nav class="site-nav">
            <h1 class="logo">WebApp<span> Navigation</span></h1>

            <div class="menu-toggle">
              <div class="hamburger"></div>
            </div>

            <ul class="open desktop">
{{#foreach data.menuitems data}}
                <!-- Menu Item '{{title}}' - type: {{menutype}} - visibility: {{{visibility}}} -->
{{#ifcond visibility "==" "visible"}}
{{#ifcond menutype "==" "jscall"}}
                <li><a href="#!" onclick="app.evt.{{filename title}}()"><i class="fa {{{menuicon}}} site-nav--icon"></i>{{{title}}}</a></li>
{{/ifcond}}
{{#ifcond menutype "==" "page"}}
                <li><a href="#!" onclick="app.nav.page('{{filename title}}')"><i class="fa {{{menuicon}}} site-nav--icon"></i>{{{title}}}</a></li>
{{/ifcond}}
{{#ifcond menutype "==" "link"}}
                <li><a href="{{{url}}}" {{{target}}}><i class="fa {{{menuicon}}} site-nav--icon"></i>{{{title}}}</a></li>
{{/ifcond}}
{{/ifcond}}
{{/foreach}}
            </ul>
        </nav>
    </div>
    <div class="area" data-role="page-container" id="page-container">
{{#foreach data.menuitems data}}
{{#ifcond menutype "==" "page"}}
{{#ifcond visibility "!=" "not used"}}
      <div class="pages-app" data-role="page" id="{{filename title}}">
        <h2>{{{title}}}</h2>
{{indent html "			    "}}

      </div>
{{/ifcond}}
{{/ifcond}}
{{/foreach}}
    </div>



  <script src="js/jquery-3.2.0.min.js"></script>
{{#foreach settings.cssfiles data}}
  <script src="js/{{{name}}}"></script>
{{/foreach}}
  <script src="js/menu.js"></script>
  <script>
{{{indent settings.configcode "      "}}}
  </script>
</body>
</html>

`;

// NodeJS: uncomment modules.export in last line
// module.export = {{classname}};

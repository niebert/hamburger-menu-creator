vDataJSON["tpl"]["javascript"] = `
$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');
  if ($('ul.opening').is(":visible")) {
  		console.log("MENU: visible > hide pages!");
  		$('.pages-app').hide();
  } else {
  		console.log("MENU: is hidden > show pages!");
  		$('.pages-app').show();
  };
})


var  app = {
	//--- Navigation -----
	"nav": {
		"current": "home",
		"page": function(pid) {
			pid = pid || this.current;
			console.log("Current Page:"+this.current);
			this.evt._hide_pagee();
			this.current = pid;
			console.log("New Page:"+this.current);
			this.menu.hide();
			$('#'+this.current).show();
		},
		//---- Menu -----
		"menu":	{
			"hide": function () {
				if ($('ul.opening').is(":visible")) {
  					console.log("MENU: visible > hide it!");
  					$('ul').toggleClass('opening');
  					$('.menu-toggle').toggleClass('open');
  				} else {
  					console.log("MENU: is already hidden");
  				};
			},
			"show": function () {
				if ($('ul.opening').is(":visible")) {
  					console.log("MENU: already visible ");
  				} else {
  					console.log("MENU: is hidden > show menu!");
  					$('ul').toggleClass('opening');
  					$('.menu-toggle').toggleClass('open');
  				};
			}
		},
		//--- Event Handler ----
		"evt": {
			"_hide_pages": function () {
				$('.pages-app').hide();
			}
{{#foreach data.menuitems data}}
{{#ifcond menutype "==" "jscall"}}
			,  // function called after click on '{{{title}}}'
			"{{filename title}}": function () {
                this._hide_pages();
                this.menu.hide();
{{indent code "			    "}}
			}
{{/ifcond}}
{{/foreach}}
      } //--close: evt
  }  //--close: nav
};  //--close: app

//--- init pages ----
app.nav.page("home");
`;

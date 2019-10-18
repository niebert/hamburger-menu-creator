vDataJSON["tpl"]["css"] = `
* {
    box-sizing: border-box;
}

/*
	light color: #F6F4E2
	medium color:
	dark brown:   #70420D
*/

body {
  background: {{{settings.colors.app.background}}}; /*  app & desktop #F6F4E2; */
  font-family:  sans-serif;
  letter-spacing: 1px;
}

.wrapper {
  width: 100%;
  max-width: 1960px;
  margin: 0 auto;
}


/*
.container {
  max-width: 960px;
  width: 95%;
  margin: 0 auto;
}

header {
  background: {{{settings.colors.menu.desktop.focus}}}; /* before #2059b5*/
  color: {{{settings.colors.app.textcolor}}}; /* #f7e9cc */
  padding: 1.5em 0;
  position: relative;
}

/*header::after {
  content: '';
  clear: both;
  display: block;
}*/


.logo {
  color: #fff;
  font-size: 1rem;
  margin: 0;
  padding-top: 24px;
  padding-left: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  height: 65px;
  background-color: {{{settings.colors.menu.desktop.default}}}; /* DESKTOP: dark background logo & app menu bar #E4B363 - dark blue #0431B4  */
}

.logo span {
  font-weight: 400;
}

.menu-toggle {
  position: absolute;
  padding: 0.8em;
  top: 1em;
  right: .5em;
  cursor: pointer;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  background: {{{settings.colors.menu.desktop.default}}}; /* logocolor hamburger logo color - #EBEBD3 */
  height: 3px;
  width: 2em;
  border-radius: 3px;
  -webkit-transition: all ease-in-out 350ms;
  transition: all ease-in-out 350ms;
}

.hamburger::before {
  -webkit-transform: translateY(-7px);
          transform: translateY(-7px);
}

.hamburger::after {
  -webkit-transform: translateY(4px);
          transform: translateY(4px);
}

.open .hamburger {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.open .hamburger::before {
  display: none;
}

.open .hamburger::after {
  -webkit-transform: translateY(-1px) rotate(-90deg);
          transform: translateY(-1px) rotate(-90deg);
}



nav {
    margin: 0;
    padding: 0;
}

nav ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: none;
}

nav ul.opening {
    display: block;
    height: 30px;
}

nav li {
  border-bottom: 1px solid {{{settings.colors.menu.mobile.textcolor}}}; /* light grey brownisch color #EBEBD3 - before #f6f4e2 */
}
nav li:last-child {
  border-bottom: none;
}
nav a {
  color: {{{settings.colors.menu.textcolor}}}; /* menu.textcolor app & desktop like background #EBEBD3 */
  background: {{{settings.colors.menu.mobile.default}}}; /* MOBILE: before #333 */
  display: block;
  padding: 1.5em 4em 1.5em 3em;
  text-transform: uppercase;
  text-decoration: none;
}

nav a:hover {
  background: {{{settings.colors.menu.mobile.hover}}}; /* MOBILE: hover in App menu background in menu #E4B363 - 'settings.colors.menu.mobile.hover' */
}
nav a:focus {
  background: {{{settings.colors.menu.mobile.focus}}}; /* MOBILE: focus background in App Menu #E4B363 'settings.colors.menu.mobile.focus'*/
}

.site-nav--icon {
  font-size: 1.4em;
  margin-right: 1em;
  width: 1.1em;
  text-align: right;
  color: rgba(255,255,255,.4);
}

/* flex styles */




/*
  ---------------------------------------------
  DESKTOP SETTINGS:
  i.e. all devices with a minimum screen width of 780px
  ---------------------------------------------
*/
@media (min-width: 780px) {

/* hide the [X] resp. [=] menu toggle symbol
   on navigation bar, if screen width exceeds 70px */
  .menu-toggle {
    display: none;
  }



  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  nav li {
     flex: 1 1 auto;
     border: none;
 }

   nav li a {
       padding: 1.5em 1.3em 1.5em 1.3em;
       margin: 0;
       border: none;
       background-color: {{{settings.colors.menu.desktop.default}}};   /* DESKTOP: desktop default menu background #E4B363 */
    }
    nav a:hover{
      background-color: {{{settings.colors.menu.desktop.hover}}}; /* DESKTOP: hover background desktop menu - before #d18428, rgba(255,255,255,.10); */
    }
    nav a:focus {
      background-color: {{{settings.colors.menu.desktop.focus}}}; /* DESKTOP: Focus background desktop menu - before #472a07; */
    }



  .logo {
      flex: 0 0 200px;
      margin: 0;
      padding-left: 20px;
  }


    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      text-align: center;
      background-color: {{{settings.colors.menu.desktop.default}}};   /* DESKTOP background #E4B363;*/
    }

  /* .site-nav a:hover,
  .site-nav a:focus {
    background: transparent;
  }
*/
  .site-nav--icon {
    display: none;
  }

}

`;

// CSS Template: docs/tpl/css_tpl.js

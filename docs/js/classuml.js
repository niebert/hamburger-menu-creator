/*
vJSONEditor.update_filename = function () {
  var vNode = this.el(this.aOptions["filename_id"]); // e.g. filename_id = "load_filename";
  if (vNode) {
      var vJSON = this.getValue();
      if (vJSON.data) {
        if (vJSON.data.hasOwnProperty(this.aOptions["filename_key"])) {
          vNode.innerHTML = app2filename(vJSON.data.appname)+vJSON.settings.extension4code;
        }
      };
  } else {
      console.log("DOM node ["+this.aOptions["filename_id"]+"] not found");
  };
}
*/

function update_filename (pJSONEditor) {
  if (pJSONEditor) {
    var vNode = pJSONEditor.el(pJSONEditor.aOptions["filename_id"]); // e.g. filename_id = "load_filename";
    if (vNode) {
        var vJSON = pJSONEditor.getValue();
        if (vJSON.data) {
          if (vJSON.data.hasOwnProperty(pJSONEditor.aOptions["filename_key"])) {
            vNode.innerHTML = class2filename(vJSON.data.appname)+vJSON.reposinfo.extension4code;
          }
        };
    } else {
        console.log("DOM node ["+pJSONEditor.aOptions["filename_id"]+"] not found");
    };
  } else {
    console.log("update_filename()-Call pJSONEditor not defined");
  }
}


function add_watch(pJSONEditor) {
  if (pJSONEditor) {
    var e = pJSONEditor.aEditor;
    if (e) {
      var vJSON = e.getValue();
      e.watch('root.basemenuitems',function() {
        update_classlist(pJSONEditor);
      });
      e.watch('root.pagemenuitems',function() {
        update_classlist(pJSONEditor);
      });
      e.watch('root.linkmenuitems',function() {
        update_classlist(pJSONEditor);
      });
      // set the current filename of the class in init_watch() method
      // later any load() call will update the filename in DOM tree
      if (vJSON.data.hasOwnProperty(pJSONEditor.aOptions["filename_key"])) {
        vNode.innerHTML = class2filename(vJSON.data.appname)+vJSON.reposinfo.extension4code;
      }
    } else {
      console.log("ERROR: init_watch() - pJSONEditor.aEditor not defined!");
    }
  } else {
    console.log("init_watch()-Call pJSONEditor not defined");
  }
}

function cloneJSON(pJSON) {
  var vJSON = {};
  if (pJSON) {
    vJSON = JSON.parse(JSON.stringify(pJSON));
  } else {
    console.log("ERROR: cloneJSON(pJSON) - pJSON undefined!");
  };
  return vJSON
};

function update_classlist (pJSONEditor) {
  if (pJSONEditor) {
    if (pJSONEditor.aEditor) {
      var e = pJSONEditor.aEditor;
      var d =  pJSONEditor.aDefaultJSON;
      var ed; // temporary editor
      // Sources for the classlist
      var basemenuitems = [];
      var pagemenuitems = [];
      var linkmenuitems = [];
      if (d) {
        basemenuitems = d.basemenuitems || [];
        pagemenuitems = d.pagemenuitems || [];
        linkmenuitems = d.linkmenuitems || [];
      } else {
        console.log("WARNING: classuml.js:75 - pJSONEditor.aDefaultJSON undefined");
      };
      if (e) {
        // BaseClassList
        ed = e.getEditor('root.basemenuitems');
        if (ed) {
           basemenuitems =  ed.getValue() || [];
        } else {
          console.log("WARNING: classuml.js:83  - basemenuitems undefined");
          basemenuitems = pJSONEditor.aDefaultJSON.basemenuitems || [];
        };
        ed = e.getEditor('root.pagemenuitems');
        if (ed) {
           pagemenuitems =  ed.getValue() || [];
        } else {
          console.log("WARNING: classuml.js:83  - pagemenuitems undefined");
          pagemenuitems = pJSONEditor.aDefaultJSON.pagemenuitems || [];
        };
        ed = e.getEditor('root.linkmenuitems');
        if (ed) {
           linkmenuitems =  ed.getValue() || [];
        } else {
          console.log("WARNING: classuml.js:96  - linkmenuitems undefined");
          linkmenuitems = pJSONEditor.aDefaultJSON.linkmenuitems || [];
        };
        // write a joint list of all classes to classlist
        // (1) get the editor that will update
        ed =  e.getEditor('root.classlist');
        // (2) concat all source array of classnames
        var classlist = pagemenuitems.concat(linkmenuitems);
        classlist.sort();
        // inject the base classes (Integer,String, Array, Boolean, Float, ...) before remote and local classes
        classlist = basemenuitems.concat(classlist);
        // insert "no class defined" as first option for unclassified variables
        if ((classlist.length > 0) && classlist[0] != "") {
          // add "no class" as first element in class list.
          var no_class = [""];
          classlist = no_class.concat(classlist);
        }
        // (3) update editor of the classlist with array for editor with id "root.classlist"
        if (ed) {
           ed.setValue(classlist);
        } else {
          console.log("WARNING: classuml.js:111  -  write to classlist cancelled - editor undefined");
        };
        update_basemenuitems(pJSONEditor);
      } else {
        console.log("WARNING: update_classlist(pJSONEditor) pJSONEditor.aEditor undefined");
      }
    }
  } else {
    console.log("Editor in update_classlist(pEditor) was not defined!");
  };
}

function update_basemenuitems (pJSONEditor) {
  console.log("update_basemenuitems()");
  if (pJSONEditor) {
    if (pJSONEditor.aEditor) {
      var e = pJSONEditor.aEditor;
      // Sources for the classlist
      var ed =  e.getEditor('root.baseclasses');
      var baseclasses = [];
      if (ed) {
        baseclasses = ed.getValue() || [];
      } else {
        console.log("classuml.js:137 - baseclasses undefined");
      }
      // write a joint list of all classes to classlist
      // (1) get the editor that will update
      // (2) concat all source array of classnames
      var basemenuitems = [];
      for (var i = 0; i < baseclasses.length; i++) {
        basemenuitems.push(baseclasses[i].name);
      };
      // (3) update the basemenuitems array to the editor "ed" for "basemenuitems"
      ed.setValue(basemenuitems);
    }
  } else {
    console.log("Editor in update_classlist(pEditor) was not defined!");
  }
}

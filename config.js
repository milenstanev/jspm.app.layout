System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "msc:*": "jspm_packages/msc/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.2",
    "angular-ui/ui-router": "github:angular-ui/ui-router@0.4.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "christopherthielen/ui-router-extras": "github:christopherthielen/ui-router-extras@0.1.3",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "distros/bootstrap-less": "github:distros/bootstrap-less@3.3.9",
    "json": "github:systemjs/plugin-json@0.2.3",
    "jspm.app.util": "msc:jspm.app.util@master",
    "less": "github:systemjs/plugin-less@0.1.2",
    "milenstanev-jspm.app.layout.smart": "github:milenstanev-jspm.app.layout.smart@0.0.2",
    "ocombe/ocLazyLoad": "github:ocombe/ocLazyLoad@1.1.0",
    "text": "github:systemjs/plugin-text@0.0.9",
    "util": "msc:util@0.0.1",
    "github:distros/bootstrap-less@3.3.9": {
      "jquery": "github:components/jquery@3.1.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
<<<<<<< Updated upstream
    "github:milenstanev-jspm.app.layout.smart@0.0.2": {
=======
    "github:milenstanev/jspm.app.layout.smart@master": {
>>>>>>> Stashed changes
      "FortAwesome/Font-Awesome": "github:FortAwesome/Font-Awesome@4.7.0",
      "angular": "github:angular/bower-angular@1.6.2",
      "angular-ui/ui-router": "github:angular-ui/ui-router@0.4.2",
      "christopherthielen/ui-router-extras": "github:christopherthielen/ui-router-extras@0.1.3",
      "css": "github:systemjs/plugin-css@0.1.32",
      "distros/bootstrap-less": "github:distros/bootstrap-less@3.3.9",
      "json": "github:systemjs/plugin-json@0.2.3",
      "less": "github:systemjs/plugin-less@0.1.2",
      "ocombe/ocLazyLoad": "github:ocombe/ocLazyLoad@1.1.0",
      "text": "github:systemjs/plugin-text@0.0.9"
    },
    "github:systemjs/plugin-less@0.1.2": {
      "css": "github:systemjs/plugin-css@0.1.30"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

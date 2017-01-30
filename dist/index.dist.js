!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){var t;if(e&&e.__esModule){t={};for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t["default"]=e}else t={"default":e,__useDefault:!0};return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return d(t,r),a(t,r,[]),t.module}function d(e,t){if(!t.depLoads){t.declare&&i(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&d(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function i(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,d=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var d=0;d<n.length;d++)n[d](o);return u=!1,t}},{id:t.key});"function"!=typeof d?(r.setters=d.setters,r.execute=d.execute):(r.setters=[],r.execute=d)}function f(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function l(e,t,r,o){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{"default":{},__useDefault:!0},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,d=t[n];return u=-1===r.indexOf(d)?a(d,d.linkRecord,r):d.linkRecord.moduleObj,u.__useDefault?u["default"]:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var d=0;d<r.deps.length;d++){var i=r.depLoads[d],f=i.linkRecord;f&&-1===n.indexOf(i)&&(u=a(i,f,f.setters?n:[]))}r.execute.call(b)}else{var l={id:t.key},c=r.moduleObj;Object.defineProperty(l,"exports",{configurable:!0,set:function(e){c["default"]=e},get:function(){return c["default"]}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var d=0;d<r.deps.length;d++)p(r.deps[d]);var v=r.execute.call(e,p,c["default"],l);if(void 0!==v?c["default"]=v:l.exports!==c["default"]&&(c["default"]=l.exports),c["default"]&&c["default"].__esModule)for(var m in c["default"])Object.hasOwnProperty.call(c["default"],m)&&"default"!==m&&(c[m]=c["default"][m])}var l=t.module=new o(r.moduleObj);if(!r.setters)for(var d=0;d<t.importerSetters.length;d++)t.importerSetters[d](l);return l}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,b={};return Object.freeze&&Object.freeze(b),function(e,t,n,d){return function(i){i(function(i){var s={_nodeRequire:m,register:f,registerDynamic:l,get:function(e){return p[e].module},set:c,newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));d(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v["default"]:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:global)

(["a"], ["e","d","f","10","11"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register('b', [], function (_export) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', function (angularModule, futureRoutes) {

				angularModule.requires.push('ui.router');
				angularModule.requires.push('ct.ui.router.extras.core');
				angularModule.requires.push('ct.ui.router.extras.future');
				angularModule.requires.push('oc.lazyLoad');

				var RouterConfig = ['$ocLazyLoadProvider', '$stateProvider', '$futureStateProvider', function ($ocLazyLoadProvider, $stateProvider, $futureStateProvider) {

					$futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState', function ($q, $ocLazyLoad, futureState) {

						var def = $q.defer();

						System['import'](futureState.src).then(function (loaded) {
							var newModule = loaded;
							if (!loaded.name) {
								var key = window.Object.keys(loaded);
								newModule = loaded[key[0]];
							}

							$ocLazyLoad.load(newModule).then(function () {
								def.resolve();
							}, function (err) {
								throw err;
							});
						});

						return def.promise;
					}]);

					futureRoutes.forEach(function (r) {
						$futureStateProvider.futureState(r);
					});
				}];

				return RouterConfig;
			});
		}
	};
});
$__System.register('c', ['10', '11', 'd', 'e', 'f', 'b'], function (_export) {
  /**
   * @type{angular.Module}
   */
  'use strict';

  var angular, router;
  return {
    setters: [function (_) {}, function (_2) {}, function (_d) {
      angular = _d['default'];
    }, function (_e) {}, function (_f) {}, function (_b) {
      router = _b['default'];
    }],
    execute: function () {
      _export('angular', angular);

      _export('router', router);
    }
  };
});
$__System.register('12', ['c'], function (_export) {

  //import asd from 'milenstanev/jspm.app.layout.smart';
  'use strict';

  var angular, router, component;
  return {
    setters: [function (_c) {
      angular = _c.angular;
      router = _c.router;
    }],
    execute: function () {
      component = angular.module('app', [
        //asd.name
      ]);

      component.config(router(component, [
      /*{
        "stateName": "layout",
        "urlPrefix": "/layout/default",
        "type": "load",
        "src": "./src/components/default/index.js"
      },*/
      {
        "stateName": "layout",
        "urlPrefix": "/",
        "type": "load",
        "src": "milenstanev/jspm.app.layout.smart"
      }]));

      component.config(function ($locationProvider, $httpProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
          enabled: false,
          requireBase: false
        });

        $httpProvider.useApplyAsync(true);
        return $urlRouterProvider.otherwise('/layout');
      });

      _export('default', component);
    }
  };
});
$__System.register('a', ['12'], function (_export) {
  'use strict';

  return {
    setters: [function (_) {
      var _exportObj = {};
      _exportObj['default'] = _['default'];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["angular-ui/ui-router","angular","christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.core.js","christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.future.js","ocombe/ocLazyLoad"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("angular-ui/ui-router"), require("angular"), require("christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.core.js"), require("christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.future.js"), require("ocombe/ocLazyLoad"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});
//# sourceMappingURL=index.dist.js.map
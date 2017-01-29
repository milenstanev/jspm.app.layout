import {
  angular, router
} from './libs/dependecies.js';

const component = angular.module('app', []);

component.config(router(component, [
  {
    "stateName": "layout",
    "urlPrefix": "/layout/default",
    "type": "load",
    "src": "./src/components/default/index.js"
  },
  {
    "stateName": "layout.app",
    "urlPrefix": "/layout-smart",
    "type": "load",
    "src": "./src/components/smart/index.js"
  }
]));

component.config(function($locationProvider, $httpProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $httpProvider.useApplyAsync(true);
  return $urlRouterProvider.otherwise('/layout-smart');
});

export default component;

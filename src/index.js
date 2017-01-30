import {
  angular, router
} from './libs/dependecies.js';

//import asd from 'milenstanev/jspm.app.layout.smart';
const component = angular.module('app', [
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
      "src": "github:milenstanev/jspm.app.layout.smart@master"
    }
]));

component.config(($locationProvider, $httpProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $httpProvider.useApplyAsync(true);
  return $urlRouterProvider.otherwise('/layout');
});

export default component;

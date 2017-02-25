import {
  angular, router
} from './libs/dependecies.js';

/**
 * $type{angular.module}
 */
const component = angular.module('app', []);

class Asd {
  constructor($state) {
    console.log($state)
  }
}
Asd.$inject = ['$state'];

component.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

  // TODO
  /*$stateProvider
    .state('layout', {
      abstract: true,
      views: {
        layout: {
          template: layoutHtml
        }
      }
    });*/

  $stateProvider
    .state(`layout.smart`, {
      url: '/layout-smart',
      views: {
        "content": {
          template: "asd"
        },
        "navigation": {
          template: "<a ui-sref='layout.smart'>Link</a><a ui-sref='layout.other'>Link</a>"
        },
        "footer": {
          template: ' | Footer Template'
        }
      }
    })

    .state(`layout.other`, {
      url: '/other',
      views: {
        "content": {
          template: "other"
        },
        "navigation": {
          template: "<a ui-sref='layout.smart'>Link</a><a ui-sref='layout.other'>Link</a>"
        },
        "footer": {
          template: ' | other'
        }
      }
    });

  return $urlRouterProvider.otherwise('/layout-smart');
}]);

component.config(router(component, [
  {
    "stateName": "layout",
    "urlPrefix": "/layout-smart",
    "type": "load",
    "src": "github:milenstanev-jspm.app.layout.smart@0.0.4"
  },
  {
    "stateName": "layout.other",
    "urlPrefix": "/other",
    "type": "load",
    "src": "github:milenstanev-jspm.app.layout.smart@0.0.4"
  }
]));

export default component;

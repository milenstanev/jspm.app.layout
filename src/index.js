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
  /*$stateProvider
    .state('layout', {
      abstract: true,
      views: {
        layout: {
          template: 'Template'
        }
      }
    });*/

  $stateProvider
    .state(`layout.home`, {
      url: '/home',
      views: {
        'content': {
          template: 'asd'
        },
        'navigation': {
          template: `<a ui-sref='layout.home'>Link</a><a ui-sref='layout.other'>Link</a>`
        },
        'footer': {
          template: ' | Footer Template'
        }
      }
    })

    .state(`layout.other`, {
      url: '/other',
      views: {
        'content': {
          template: 'other'
        },
        'navigation': {
          template: `<a ui-sref='layout.home'>Link</a><a ui-sref='layout.other'>Link</a>`
        },
        'footer': {
          template: ' | other'
        }
      }
    });

  return $urlRouterProvider.otherwise('/home');
}]);

component.config(router(component, [
  {
    'stateName': 'layoutSmart',
    'urlPrefix': '/',
    'type': 'load',
    'src': 'milenstanev/jspm.app.layout.smart'
  },
  {
    'stateName': 'layoutSmart.other',
    'urlPrefix': '/',
    'type': 'load',
    'src': 'milenstanev/jspm.app.layout.smart'
  }
]));

export default component;

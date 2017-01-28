import angular from 'angular/bower-angular'
import 'angular-ui/ui-router';

import ComponentCtrl from './Controller.js';

/**
 * @desc Description of main module
 * @type{angular.Module}
 */
const component = angular.module('componentName', [
  'ui.router'
]);

component.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });

  return $urlRouterProvider.otherwise('/home')
});

component.component('home', {
  template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  controller: ComponentCtrl
});

export default component;
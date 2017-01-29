/**
 * @type{angular.Module}
 */
import angular from 'angular';
import 'angular-ui/ui-router';
import 'christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.core';
import 'christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.future';
import 'ocombe/ocLazyLoad';
import router from './router.js';

export {
  angular, router
}

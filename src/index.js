import angular from 'angular';

const app = angular.module('app', []);

class AppCtrl {
  constructor() {
    this.componentTitle = '';
    this.componentContent = '';
  }
}

app.component('app', {
  controller: AppCtrl,
  template: '<h1> {{$ctrl.componentTitle}} </h1><p> {{$ctrl.componentContent}} </p>',
  bindings: {
    componentTitle: '=',
    componentContent: '=',
  }
});

angular.bootstrap(document.body, [app.name]);

// if it's component, this is main! | export default app;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index',{ path: '/' });
  this.route('employee-form');
  this.route('employee-form', { path: '/employee-form/:employee_id' })
});

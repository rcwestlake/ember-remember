import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reminders', function() {
    this.route('reminder', { path: ':id'});
  });
  this.route('new-reminder', { path: '/new'});
});

export default Router;

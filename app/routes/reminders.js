import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.get('store').findAll('reminder'))
    return this.get('store').findAll('reminder')
  }
});

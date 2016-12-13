import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(model) {
      model.destroyRecord().then(() => {
        this.transitionToRoute('/reminders')
      });
    }
  }
});

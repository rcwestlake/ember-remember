import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(model) {
      console.log('delete');
      this.get('store').findRecord('reminder', model.id)
      .then((reminder) => {
        reminder.destroyRecord()
      })
      .then(() => {
        this.transitionToRoute('/reminders')
      })
    }
  }
});

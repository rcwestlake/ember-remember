import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(reminder) {
      reminder.destroyRecord()
    }
  }
});

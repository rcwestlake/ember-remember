import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(reminder) {
      console.log('delete');
      this.get('store').findRecord('reminder', reminder.id)
      .then((reminder) => {
        reminder.destroyRecord()
      })
    }
  }
});

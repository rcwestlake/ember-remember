import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['new-reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    },

    editReminder(model) {
      console.log('in edit reminder');
      console.log('model id', model.id);
      debugger
      console.log('model title', model.attributes.title);
      const reminder = this.getProperties('title', 'date', 'notes');
      // reminder.date = new Date(reminder.date);
      // this.get('store').findRecord('reminder', reminder).save();
    }
  }
});

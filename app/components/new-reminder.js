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
      this.get('store').findRecord('reminder', model.id).then(function(reminder) {
        console.log(new Date(model.get('date')));
        reminder.set('title', model.get('title'));
        reminder.set('date', new Date(model.get('date')));
        reminder.set('notes', model.get('notes'));
        reminder.save();
      })
    }
  }
});

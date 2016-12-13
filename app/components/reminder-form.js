import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['reminder-form'],

  title: '',
  date: '',
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save()
      .then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    },
    discardChanges(model) {
        model.rollbackAttributes();
    },
    editReminder(model) {
      this.get('store').findRecord('reminder', model.id)
        .then(function(reminder) {
          reminder.setProperties({
            title: model.get('title'),
            date: new Date(model.get('date')),
            notes: model.get('notes')
        })
        reminder.save()
      })
    }
  }
});

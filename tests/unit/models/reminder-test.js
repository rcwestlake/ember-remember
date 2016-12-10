import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminder', 'Unit | Model | reminder', {
  // Specify the other units that are required for this test.
  needs: []
});

test('has the right keys and structure', function(assert) {
  const model = this.subject();
  const hasTitle = Object.keys(model.toJSON()).indexOf('title') > -1;
  const hasDate = Object.keys(model.toJSON()).indexOf('date') > -1;
  const hasNotes = Object.keys(model.toJSON()).indexOf('notes') > -1;
  assert.ok(hasTitle, 'has title in reminders model');
  assert.ok(hasDate, 'has date in reminders model');
  assert.ok(hasNotes, 'has notes in reminders model');
});

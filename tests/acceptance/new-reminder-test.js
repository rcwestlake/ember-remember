import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new reminder');

test('visiting /reminders/new', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'visits the /new url');
  });
});

test('add new reminder on click', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'visits the /new url');
  });

  fillIn('.spec-title-field', 'Banana')
  fillIn('.spec-date-field', '12/08/2016')
  fillIn('.spec-notes-field', 'Only extra green ones')

  click('.add-reminder--submit')

  andThen(function() {
    assert.equal(find('.spec-reminder-item').length, 6, 'length of items on page after added reminder');
  });
});

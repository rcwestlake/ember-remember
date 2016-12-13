import { test, skip } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new reminder');

test('visiting /reminders/new', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-link-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'visits the /new url');
  });
});

test('add new reminder on click', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-link-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'visits the /new url');
  });

  fillIn('.spec-title-field', 'Banana')
  fillIn('.spec-date-field', '12/08/2016')
  fillIn('.spec-notes-field', 'Only extra green ones')

  click('.spec-add-reminder')

  andThen(function() {
    assert.equal(find('.spec-reminder-item').length, 6, 'length of items on page after added reminder');
  });
});

skip('edit reminder', function(assert) {
  visit('/');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Banana')
  fillIn('.spec-date-field', '12/08/2016')
  fillIn('.spec-notes-field', 'Only extra green ones')

  click('.spec-add-reminder')

  click('.spec-reminder-item')

  click('.spec-link-edit-reminder')

  fillIn('.spec-title-field', 'New reminder')
  fillIn('.spec-date-field', '01/10/2030')
  fillIn('.spec-notes-field', 'Whats up!')

  click('.spec-add-reminder')

  andThen(function() {
    assert.equal(find('.spec-selected-reminder').text().trim(), find('.spec-selected-reminder').text().trim(), 'selected reminder text should match list');
  })
})

skip('edit reminder button', function(assert) {
  visit('/');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Banana')
  fillIn('.spec-date-field', '12/08/2016')
  fillIn('.spec-notes-field', 'Only extra green ones')

  click('.spec-add-reminder')

  click('.spec-reminder-item')

  andThen(function() {
    assert.equal(find('.spec-link-edit-reminder').length, 1, 'should have an edit button');
  })
})

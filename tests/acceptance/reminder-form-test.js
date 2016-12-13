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

test('edit reminder button', function(assert) {
  visit('/reminders');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Write tests');
  fillIn('.spec-date-field', '12/11/2016');
  fillIn('.spec-notes-field', 'Really good ones');

  click('.spec-add-reminder')

  andThen(function() {
    assert.equal(find('.spec-reminder-item').length, 1, 'length of items on page after added reminder');
  });


  click('.spec-reminder-title:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'visits the /1 url');
  });

  click('.spec-link-edit-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit', 'visits the /edit url');
  });
})

test('edit reminder', function(assert) {
  visit('/reminders');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Write great tests');
  fillIn('.spec-date-field', '12-11-2016');
  fillIn('.spec-notes-field', 'Really good ones');

  click('.spec-add-reminder')

  click('.spec-reminder-title:first');

  click('.spec-link-edit-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit', 'visits the /edit url');
  });

  fillIn('.spec-title-field', 'Write incredible tests');
  fillIn('.spec-notes-field', 'For ember stuff');

  andThen(function() {
    assert.equal(find('.spec-selected-reminder').text().trim(), 'Write incredible tests', 'selected reminder text should match edited version');
    assert.equal(find('.spec-selected-notes').text().trim(), 'For ember stuff', 'selected note text should match edited version');
  })
})

test('edit reminder saves after clicking "save"', function(assert) {
  visit('/reminders');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Write great tests');
  fillIn('.spec-notes-field', 'Really good ones');

  click('.spec-add-reminder')

  click('.spec-reminder-title:first');

  click('.spec-link-edit-reminder');

  fillIn('.spec-title-field', 'Eat pizza');
  fillIn('.spec-notes-field', 'With lots of cheese');

  click('.spec-add-reminder');

  andThen(function() {
    assert.equal(find('.spec-selected-reminder').text().trim(), 'Eat pizza', 'title text should match edited version');
    assert.equal(find('.spec-selected-notes').text().trim(), 'With lots of cheese', 'notes text should match edited version');
  })
})

test('edit reminder discard changes', function(assert) {
  visit('/reminders');

  click('.spec-link-new-reminder');

  fillIn('.spec-title-field', 'Write great tests');
  fillIn('.spec-notes-field', 'Really good ones');

  click('.spec-add-reminder')

  click('.spec-reminder-title:first');

  click('.spec-link-edit-reminder');

  fillIn('.spec-title-field', 'Eat pizza');
  fillIn('.spec-notes-field', 'With lots of cheese');

  click('.spec-discard-changes');

  andThen(function() {
    assert.equal(find('.spec-selected-reminder').text().trim(), 'Write great tests', 'title text should match original reminder');
    assert.equal(find('.spec-selected-notes').text().trim(), 'Really good ones', 'notes text should match original reminder');
  })
})

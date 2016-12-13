/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('routes automatically to /reminders', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders', 'routed correctly on load')
  });
});

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders', 'visits the /reminders page');
    assert.equal(Ember.$('.spec-reminder-item').length, 5, 'requested 5 reminders from server show on the page');
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-reminder-title:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'goes to correct link');
    assert.equal(find('.spec-reminder-item').length, 5, 'length of items on page');
    assert.equal(find('.active').length, 1, 'find the active reminder');
    assert.equal(find('.spec-selected-reminder').text().trim(), find('.spec-selected-reminder').text().trim(), 'selected reminder text should match list');
  });
});

test('viewing welcome note', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.spec-welcome').length, 1, 'should show welcome note if no reminder added to page')
    assert.equal(find('.spec-welcome').text().trim(), 'WELCOME!!!', 'displays correct welcome text')
  })
})

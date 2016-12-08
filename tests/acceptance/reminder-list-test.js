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
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
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

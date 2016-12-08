import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new reminder');

test('visiting /new', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  click('.spec-new-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/new');
  });
});

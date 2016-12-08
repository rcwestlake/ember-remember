import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-reminder', 'Integration | Component | new reminder', {
  integration: true
});

skip('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  this.set('title', '')
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-reminder}}`);

  assert.equal(find('.spec-title-field').text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-reminder}}
      //fill in reminders block
    {{/new-reminder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

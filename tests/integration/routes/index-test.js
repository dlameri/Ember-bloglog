import Ember from "ember";
import {
    test
}
from 'ember-qunit';
import startApp from '../../helpers/start-app';
var App;

module('IndexRoute IntegrationTest', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test('it redirects to /posts', function() {
    expect(1);
    visit("/").then(function() {
        equal(currentPath(), "posts", "Index redirects to /posts");
    });
});

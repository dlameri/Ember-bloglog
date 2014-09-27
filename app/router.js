import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

if (config.environment === 'production') {
    Router.reopen({
        notifyGoogleAnalytics: function() {
            return window.ga('send', 'pageview', {
                'page': this.get('url'),
                'title': this.get('url')
            });
        }.on('didTransition')
    });
}

Router.map(function() {
    this.route('posts');
});

export
default Router;

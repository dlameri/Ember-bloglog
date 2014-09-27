import DS from 'ember-data';

var post = DS.Model.extend({
    title: DS.attr('string'),
    subtitle: DS.attr('string'),
    postedBy: DS.attr('string'),
    postedDate: DS.attr('string')
});

post.reopenClass({
    FIXTURES: [{
        id: 1,
        title: 'Initial Application Structure',
        subtitle: 'Installing everything that is necessary and initializing the app with Ember-cli',
        postedBy: 'Dimitri Lameri',
        postedDate: '28/09/2014'
    }, ]
});

export
default post;

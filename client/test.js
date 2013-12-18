Meteor.subscribe('userPresence');

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('pageOne', {
    path: '/pageOne'
  });
  this.route('pageTwo', {
    path: '/pageTwo'
  });
  this.route('pageThree', {
    path: 'pageThree'
  });
});

Template.users.helpers({
  users: function() {
    return Meteor.presences.find();
  }
});
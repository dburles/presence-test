Meteor.publish('userPresence', function() {
  return Meteor.presences.find({}, { fields: { state: true, userId: true }});
});

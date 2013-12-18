Meteor.Presence.state = function() {
  return {
    route: Router.current() && Router.current().path,
    test1: Session.get('test1'),
    test2: Session.get('test2'),
    test3: Session.get('test3'),
    user: Meteor.userId()
  };
};
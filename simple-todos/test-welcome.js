if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('userName', 'Andrew');

  Template.hello.helpers({
    userName: function () {
      // console.log('hello helper')
      return Session.get('userName') + 'Chen';
    }
  });

  Template.hello.events({

    'click button': function () {
      // increment the counter when button is clicked
      console.log('hello events')

      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

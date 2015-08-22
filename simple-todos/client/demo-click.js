
// counter starts at 0
Session.setDefault('counter', 0);

Template.click.helpers({
  counter: function () {
    // console.log('click helper')
    return Session.get('counter') + 'hi';
  }
});

Template.click.events({

  'click button': function () {
    // increment the counter when button is clicked

    Session.set('counter', Session.get('counter') + 1);
  }
});


// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

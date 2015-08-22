
// counter starts at 0
Session.setDefault('userName', 'Andrew');

Template.welcome.helpers({
  userName: function () {
    // console.log('hello helper')
    return Session.get('userName') + 'Chen';
  }
});
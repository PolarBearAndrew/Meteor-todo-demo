
var init = [
  { id:'1', todo: '代辦工作 1' },
  { id:'2', todo: '代辦工作 2' },
  { id:'3', todo: '代辦工作 3' },
  { id:'4', todo: '代辦工作 4' },
  { id:'5', todo: '代辦工作 5' }
];

Session.setDefault('list', init );


Template.todoList.helpers({

  // 取得待辦清單
  list: function () {
    return Session.get('list');
  }
});


// events 裡面包裝了這麼模板會使用的事件
Template.todoList.events({

  'click span': function () {

    // console.log('id', this.id );
    var id = this.id;
    var list = Session.get('list');

    list = list.filter( function( val ){
      return val.id !== id;
    });

    return Session.set('list', list );
  }

});

var init = [
  { id:'1', todo: '代辦工作 1', done: false  },
  { id:'2', todo: '代辦工作 2', done: false  },
  { id:'3', todo: '代辦工作 3', done: false  },
  { id:'4', todo: '代辦工作 4', done: false  },
  { id:'5', todo: '代辦工作 5', done: false  }
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

  'click input': function () {

    // console.log('id', this.id );
    var id = this.id;
    var list = Session.get('list');

    list = list.filter( function( val ){
      return val.id !== id;
    });

    Session.set('list', list );
  },

  // 'click #sub': function () {

  //   // 將 session 中的 counter - 1
  //   var num = Session.get('counter');
  //   Session.set('counter', num - 1);
  // }

});
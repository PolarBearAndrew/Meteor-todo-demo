var init = [
  { id:'1', todo: '代辦工作 1' },
  { id:'2', todo: '代辦工作 2' },
  { id:'3', todo: '代辦工作 3' },
  { id:'4', todo: '代辦工作 4' },
  { id:'5', todo: '代辦工作 5' }
];

Session.setDefault('list', init );
Session.setDefault('temp', '' ); // temp for input


Template.todoListInput.helpers({

  // 取得待辦清單
  list: function () {
    return Session.get('list');
  },

  //temp for input
  temp: function () {
    return Session.get('temp');
  }
});


// events 裡面包裝了這麼模板會使用的事件
Template.todoListInput.events({

  // 完成工作
  'click span': function () {

    // console.log('id', this.id );
    var id = this.id;
    var list = Session.get('list');

    list = list.filter( function( val ){
      return val.id !== id;
    });

    return Session.set('list', list );
  },

  // 新增工作
  'change #todo-input': function ( obj ) {

    return Session.set('temp', obj.target.value);
  },

  // 新增工作
  'click #add': function () {

    var lastJob = 0, list = Session.get('list');
    lastJob = list[list.length - 1] || {} ; // last one id

    list.push({
      id:  lastJob.id || 0, //be next one
      todo: Session.get('temp')
    });

    return Session.set('list', list );
  }

});
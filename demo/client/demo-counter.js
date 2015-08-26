
var counter = 0; // 寫這種一般變數, 是沒有辦法觸發網頁自動更新的

Session.setDefault('counter', 0); //設定一個 session 變數


// helpers 包裝了 template 裡面所使用的資料的 get function
Template.counter.helpers({

  // counter 這個 func 類似 OOP 中 get 的操作，單純用來取得某個值
  counter: function () {

    // this.name 可以取得從 router 傳過來的 data 物件中的參數 name
    return Session.get('counter');
  }
});


// events 裡面包裝了這麼模板會使用的事件
Template.counter.events({

  // clici 事件 #add 為 id 篩選器
  'click #add': function () {

    // 將 session 中的 counter + 1
    var num = Session.get('counter');
    Session.set('counter', num + 1);
  },

  'click #sub': function () {

    // 將 session 中的 counter - 1
    var num = Session.get('counter');
    Session.set('counter', num - 1);
  }

});
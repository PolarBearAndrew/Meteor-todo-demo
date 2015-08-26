# Meteor-simple-demo

A simple todo-list demo for Meteor

* [Meteor Documentation](http://docs.meteor.com/#/basic/)
* [iron:router](https://atmospherejs.com/iron/router)
* [ian:accounts-ui-bootstrap-3](https://atmospherejs.com/ian/accounts-ui-bootstrap-3)

### How to start

``` bat
$ meteor
```

### 資料夾結構

Meteor 的 `.js` 和 `.html` 寫在哪邊並沒太大的差別，所有的資料最後都會被 Meteor 吃進去 (但我並不清楚他是否會做 bundle 的動作)，命名跟資料夾分類大致上也沒有規則 `.js` 之間也不需要互相 `import` 或 `require`。言下之意就是 `NPM` 沒有辦法一如以往的在 Meteor 中直接安裝運轉 (我也還不知道可不可以硬是把 node_module 的檔案整個 copy 近來 )。

目前的資料夾結構是我個人設計的，狀況如下：

``` bat
.
├── client
│   ├── demo-click.js
│   └── demo-welcome.js
├── public
│   └── css
│       └── main.css
├── router
│   └── router.js
├── server
│   └── init.js
└── template
    ├── 00_main.html
    ├── demo-click.html
    └── demo-welcome.html
```

只要注意 client 和 server 資料夾，即是代表其資料夾之下的 javascript 檔案最後會跑在 client 或 server 端。

如果在這兩個資料夾之外的 `.js` 需要再將所有的程式碼用 ` if( Meteor.isClient ){ ... }` 或是 `if( Meteor.isServer ){ ... }` 包起來，讓 Meteor 去分辨這段 code 是放置在 client - server 中的哪邊。直接放置在資料夾之下就可以解決這個問題，省去一個很醜的 `if`。

##### client

``` js
Session.setDefault('counter', 0); //設定一個 session 變數

// counter 這個 func 類似 OOP 中 get 的操作，單純用來取得某個值
Template.demo.helpers({
  counter: function () {
    // this.name 可以取得從 router 傳過來的 data 物件中的參數 name
    return Session.get('counter');
  }
});
```

`helpers` 處理名為 `demo` 模板裡面呼叫的參數，模板會取得 function 的 return。

Session 操作：

* `Session.setDefault(key, value)`
* `Session.set(key, value)`
* `Session.get(key)`

##### server

``` js
Meteor.startup(function() {
   // code to run on server at startup
   console.log('\n server startup')
});
```

`Meteor.startup` 承接了 server 啟動的事件。

##### public

文件上寫放置 img, css 等資料

##### routers 

``` js
Router.route('/', function() {
    this.render('demo');
});

Router.route('/welcome', function() {
    this.render('welcome');
});

Router.route('/welcome/:name', function() {

  console.log('name', this.params.name)

  this.render('welcome', { data: { name: this.params.name } });
});

```

用法與 express 相當雷同，render 時傳遞資料，需要包裝在 data 的物件之下，`welcome` 頁面指的是 body + template[name='welcome']。

* template

模板，記得加上 `name` 的屬性即可。

``` html
<template name="welcome">
  <h1>welcome to my test page</h1>
  <p>Hi, {{ userName }}</p>
  <p>Hi, {{ managerNmae }}</p>
</template>
```

使用 `{{ variable }}` 讀取參數，該參數必須在 helpers 中有設定。

使用 `{{> templateName }}` 讀取其他模板

還有許多模板操作沒有寫上來。

# Meteor-simple-demo

A simple demo for Meteor

[Meteor Documentation](http://docs.meteor.com/#/basic/)

### How to start

``` bat
$ meteor
```

### 資料夾結構

其實 Meteor 的 `.js` 和 `.html` 寫在哪邊並沒太大的差別，所有的資料最後都會被 Meteor 吃進去，命名跟資料夾分類可以隨心所欲。

但注意 client 和 server 資料夾，如果在這兩個資料夾之外的 `.js` 需要使用 ` if( Meteor.isClient )` 或是 `if( Meteor.isServer )` 去分辨這段 code 對於 Meteor 是放置在 client - server 中的哪邊。直接放置在資料夾之下就可以解決這個問題。



##### client

``` js
Session.setDefault('counter', 0);

Template.demo.helpers({
  counter: function () {
    // console.log('demo helper') 
    // this.name 可以取得從 router 傳過來的 data 物件中的參數
    return Session.get('counter') + 'hi';
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

// Router.route('/', function() {
//     this.render('click');
// });

// demo 1
Router.route('/counter', function() {
    this.render('counter');
});

// dmoe 2
Router.route('/todoList', function() {
    this.render('todoList');
});

// dmoe 3
Router.route('/todoList2', function() {
    this.render('todoList2');
});


// Router.route('/welcome/:name', function() {

//   console.log('name', this.params.name)

//   this.render('welcome', { data: { name: this.params.name } });
// });

// Router.route('/items/:_id', function() {
//     var item = Items.findOne({
//         _id: this.params._id
//     });
//     this.render('ShowItem', {
//         data: item
//     });
// });

// Router.route('/files/:filename', function() {
//     this.response.end('hi from the server\n');
// }, {
//     where: 'server'
// });

// Router.route('/restful', {
//         where: 'server'
//     })
//     .get(function() {
//         this.response.end('get request\n');
//     })
//     .post(function() {
//         this.response.end('post request\n');
//     });

Router.route('/', function() {
    this.render('click');
});

Router.route('/welcome', function() {
    this.render('welcome');
});

Router.route('/welcome/:name', function() {

  console.log('name', this.params.name)

  this.render('welcome', { data: { name: this.params.name } });
});

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

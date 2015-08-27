

var list = [ 'Ann', 'Andy', 'Door'];


//mongoose
User.find()
    .where('name').in(list)
    .exec( fucntion(){

    })


//mongo db
User.find( { name : list }, function(){

} )
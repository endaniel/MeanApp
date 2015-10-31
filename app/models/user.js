var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    userName : {type : String, default: ''},
    password : {type : String, default: ''}
})
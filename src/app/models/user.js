var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type:String,
        required:true 
    },
    email : {
        type:String,
        validate : /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required : true
    },
    token : {
        type:String
    }
});

var User = mongoose.model('User',userSchema);
module.exports(User);
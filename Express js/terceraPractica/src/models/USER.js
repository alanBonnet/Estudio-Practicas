const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        min:4,
        max:50
    },
    email:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    active:{
        type:Boolean,
        default: true,
        // required: true
    }
},{
    versionKey: false,
    timestamps:true
    
})

module.exports = model('Users', UserSchema)
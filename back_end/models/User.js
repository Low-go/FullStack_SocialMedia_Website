const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    
    username: { type: String, required: true},
    role: {type: String, default: 'user'}, 
    email: { type: String, required: true},
    hashed_password: { type: String, required: true},
    created_at: { type: Date, default: Date.now},
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, required: true},
    hashed_password: { type: String, required: true},
    created_at: { type: Date, default: Date.now},
})

const user = mongoose.model('User', UserSchema);
module.exports = User;
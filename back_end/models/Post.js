const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    content: { type: String, required: true},
    image: { type: String, default: null}, //images are optional, maybe go back and change from string
    created_at: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Post', PostSchema);

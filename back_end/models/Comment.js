const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post_id: { type: String, required: true},
    user_id: { type: String, required: true},
    content: { type: String, required: true},
    created_at: { type: Date, default: Date.now},
})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post_id: {},
    user_id: {},
    content: {},
    created_at: {}
})
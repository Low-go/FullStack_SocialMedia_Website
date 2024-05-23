const Post = require('../models/Post');

//create a post
exports.createpost = async (req, res) => {
    try {
        const { user_id, content, image} = req.body;
        const newPost = new Post({ user_id, content, image});
        const post = await newPost.save();
        res.status(201).json(post);
    }
    catch(err){
        res.status(400).json({ error: err.message});
    }
}
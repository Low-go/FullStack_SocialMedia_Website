const Post = require('../models/Post');

//the following are CRUD operations


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

//read all

exports.getAllPosts = async(req, res) => {
    try{
        const posts = await Post.find().sort({ created_at: -1});
        res.status(200).json({error: err.message});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.getPostById = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({error: 'Post could not be found'})
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.updatePost = async(req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!post) return res.status(404).json({error: 'Post could not be found'});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.deletePost = async(req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({error: 'Post could not be found'});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}
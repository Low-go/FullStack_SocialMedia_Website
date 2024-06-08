const Post = require('../models/Post');

//the following are CRUD operations


//create a post
exports.createPost = async (req, res) => {
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
        res.status(200).json({posts});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.getPostById = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({error: 'Post could not be found'});
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.updatePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id, req.body, {new: true});
        if (!post) return res.status(404).json({error: 'Post could not be found'});
        res.status(200).json(post);

        //check user is author or admin
        if (req.user.id != post.author.toString() && !req.user.isAdmin){
            return res.status(403).json({error: 'Not authorized'});
        }

        //update
        Object.assign(post, req.body);
        await post.save();

        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.deletePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({error: 'Post could not be found'});

        //check if owner or admin
        if (req.user.id != post.author.toString() && !req.user.isAdmin){
            return res.status(403).json({error: 'Not authorized'});
        }

        await post.remove();
        
        res.status(200).json({ message: 'Post deleted' });
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}
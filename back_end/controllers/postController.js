const Post = require('../models/Post');

//the following are CRUD operations

//create a post
exports.createPost = async (req, res) => {
    try {
        console.log(req.body); 
        const { author, content, image } = req.body; 
        const newPost = new Post({ author, content, image }); 
        const post = await newPost.save();
        res.status(201).json(post);
    }
    catch(err) {
        res.status(400).json({ error: err.message });
    }
}
//read all

exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find().sort({ created_at: -1 }).populate('author', 'username');
      res.status(200).json({ posts });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};


exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('author', 'username');
      if (!post) return res.status(404).json({ error: 'Post could not be found' });
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post could not be found' });
        }


        // Simplify the authorization check for debugging
        if (req.user.userId === post.author.toString() || req.user.role === 'admin') {
            // Check if post is a valid document
            if (!post._id) {
                return res.status(404).json({ error: 'Post not found' });
            }

            // Update the post
            Object.assign(post, req.body);
            await post.save();
            return res.status(200).json({ message: 'Post updated', post });
        } else {
            return res.status(403).json({ error: 'Not authorized' });
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}



exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post could not be found' });
        }


        // Simplify the authorization check for debugging
        if (req.user.userId === post.author.toString() || req.user.role === 'admin') {
            // Check if post is a valid document
            if (!post._id) {
                return res.status(404).json({ error: 'Post not found' });
            }

            // Remove the post
            await Post.deleteOne({ _id: post._id });
            return res.status(200).json({ message: 'Post deleted' });
        } else {
            return res.status(403).json({ error: 'Not authorized' });
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

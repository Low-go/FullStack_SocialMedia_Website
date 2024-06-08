const Comment = require('../models/Comment.js');

exports.createComment = async(req,res) => {
    try{
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.getComment = async(req,res) => {
    try{
        const comment = await Comment.findById(req.params.id);
        if(!comment){
            return res.status(404).send({ error: 'Comment not found' });
        }
        res.send(comment);
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.getAllComments = async(req,res) => {
    try{
        const comment = await Comment.find();
        res.send(comment);
    }
    catch(err){
        res.status(400).send(err);
    }
};


exports.updateComment = async(req,res) => {
    try{
        const comment = await Comment.findById(req.params.id);
        if(!comment){
            return res.status(404).send({ error: 'Comment not found' });
        }

        // Check if the user is the author or an admin
        if (req.user.id !== comment.author.toString() && !req.user.isAdmin) {
            return res.status(403).json({error: 'Not authorized'});
        }

        // Update the comment
        Object.assign(comment, req.body);
        await comment.save();

        res.status(200).json(comment);
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.deleteComment = async(req,res) => {
    try{
        const comment = await Comment.findById(req.params.id);
        if(!comment){
            return res.status(404).send({ error: 'Comment not found' });
        }
        // Check if the user is the author or an admin
        if (req.user.id !== comment.author.toString() && !req.user.isAdmin) {
            return res.status(403).json({error: 'Not authorized'});
        }

        // Delete the comment
        await comment.remove();

        res.status(200).json({ message: 'Comment deleted' });
    }
    catch(err){
        res.status(400).send(err);
    }
};
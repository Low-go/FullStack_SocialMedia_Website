const User = require('../models/Comment.js');


exports.createUser = async(req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch(err){
        res.status(400).send(err);

    }
};


exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send({ error: 'User not found' });
        }
        res.send(user)
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.getAllUsers = async(req, res) => {
    try{
        const user = await User.find();
        res.send(users);
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.updateUsers = async(req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true})
        if (!user){
            return res.status(404).send({ error: 'User not found.'});
        }
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }

};

exports.deleteUser = async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user){
            return res.status(404).send({ error: 'User not found.'});
        }
        res.send({message: 'User deleted Successfully'});
    }
    catch(err){
        res.status(404).send(err);
    }
}


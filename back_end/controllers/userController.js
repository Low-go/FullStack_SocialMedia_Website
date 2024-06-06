const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// this should sign them up, stop them if user already exists and hash their password
exports.createUser = async(req, res) => { //alter this
    try{
        const { name, username, email, password } = req.body;

        let user = await User.findOne({email});

        if (user){
            return res.status(400).send("This user already exists") //400 for client error
        }
        
        const hashedPassword = await bycrypt.hash(password, 10);
        user = new User({
            name,
            username,
            email,
            hashed_password: hashedPassword,
        })
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
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
};

exports.updateUser = async(req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true})
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


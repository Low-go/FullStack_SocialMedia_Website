//const http = require('http');
//require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');
const testAPI = require('./routes/test.js');
const authMiddleware = require('./middleware/authJWTmiddleWare');
const cors = require('cors');

const app = express();
// port I am connecting to 
const PORT = process.env.PORT || 5000;


//middleware, not entirely sure what is it for
app.use(bodyParser.json());
app.use(cors());

//connect to my database
const dbURI = 'mongodb://mongo:27017/PostMe';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//Routes to categories
app.use('/api/posts',  postRoutes); // jwt middleware applied in posts routes
app.use('/api/users', userRoutes);
app.use('/api/comments', authMiddleware , commentRoutes);
app.use('/api/test', testAPI); //simply for test purposes


app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// port I am connecting to 
const PORT = process.env.PORT || 5000;


//middleware, not entirely sure what is it for
app.use(bodyParser.json());

//connect to my database
const dbURI = 'mongodb://127.0.0.1:27017/PostMe';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//Routes to categories


app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
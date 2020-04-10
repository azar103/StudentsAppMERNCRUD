const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentRouter = require('./routers/student')
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://will:will@cluster0-zrurn.mongodb.net/test?retryWrites=true&w=majority", 
                 {
                     useNewUrlParser: true,
                     useUnifiedTopology: true
                 })
                 .then(() => console.log('Connexion à MongoDB réussie!'))
                 .catch(() => console.log('Connexion à MongoDB échoué!'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json())
app.use('/api/students', studentRouter)
module.exports = app






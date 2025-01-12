require('dotenv').config();

const express = require('express');
const user = require('./routes/user')
const cors = require('cors');
const session = require('express-session')
const {sessionStore} = require('./database/mongoose')



const connection = require('./database/mongoose')
const User = require('./models/user');
const clientOrigin = `http://localhost:${process.env.CLIENT_PORT}`;

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({
    origin: clientOrigin, 
    credentials: true, 
}));
app.use(session({
    secret: 'key',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 
    }
}));

app.use('/user',user);

module.exports = app;                        

require('dotenv').config();

const express = require('express');
const user = require('./routes/user')
const cors = require('cors');
const session = require('express-session')
const {sessionStore} = require('./database/mongoose')
const {Server} = require('socket.io')
const http = require('http');


const connection = require('./database/mongoose')
const User = require('./models/user');
const clientOrigin = `http://localhost:${process.env.CLIENT_PORT}`;

const app = express();
const io_server = http.createServer(app);
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
// When a client connects
io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Listen for a message from the client
    socket.on('chat message', (msg) => {
      console.log('Message received: ' + msg);
      io.emit('chat message', msg); // Emit the message to all clients
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
module.exports = app;                        

const { Server } = require('socket.io');

const setupSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: `http://localhost:${process.env.CLIENT_PORT}`,
            credentials: true
        }
    });  
    const users = new Map();
    io.on('connection', (socket) => {
        console.log('A user connected');
        socket.on('join', (username) => {
            users.set(username,socket.id);
            console.log('User joined: ' + username);
        })
        socket.on('send_message', (msg) => {    
            socket.broadcast.emit('receive_message', {message: msg ,senderId: socket.id });

        });
        
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    return io;
};

module.exports = setupSocket;
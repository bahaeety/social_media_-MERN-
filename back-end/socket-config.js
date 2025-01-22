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
        socket.on('chat message', (msg) => {
            console.log('Message received: ' + msg);
            io.emit('chat message', msg);
        });
        
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });

    return io;
};

module.exports = setupSocket;
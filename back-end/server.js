require('dotenv').config();
const app = require('./app');
const setupSocket = require('./socket-config');
const http = require('http');
const server = http.createServer(app);
setupSocket(server);

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
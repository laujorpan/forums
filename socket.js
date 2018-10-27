const SocketIo = require('socket.io');
const cookieSession = require('./middlewares/cookie-session');

const ROOMS = [
    {key:'general',name:'General forum'}, 
    {key:'rocket',name:'Rocket league'}, 
    {key:'overcooked',name:'Overcooked'}
];
const DEFAULT_ROOM = ROOMS[0];

module.exports = function(server) {
    const io = SocketIo(server);
  
    // Share session between express and socket.io to retrieve the username
    // from the session cookie
    io.use((socket, next) => {
      cookieSession(socket.request, socket.request.res, next);
    });

    io.on('connection', (socket) => {
        const user = socket.request.session.user;
        // Join to the default room
        socket.join(DEFAULT_ROOM[key]);
        // Send available rooms to the client
        // socket.emit('rooms', ROOMS);
    });
}

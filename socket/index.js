const { getPublic, joinPublic, playerDisconnect } = require('./user');
const auth = require('./auth');

module.exports = (io) => {
	io.use(auth);
	io.on('connection', (socket) => {
		socket.on('joinPublic', () => {
			const roomId = getPublic();
			joinPublic(socket.id, roomId);
			socket.join(roomId);
		});
		socket.on('disconnect', () => {
			playerDisconnect(socket.id);
		});
	});
};

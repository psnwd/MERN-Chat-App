import { Server, Socket } from "socket.io";

const EVENTS = {
	CONNECTION: "connection",
	DISCONNECT: "disconnect",
	CLIENT: {
		CREATE_ROOM: "CREATE_ROOM",
		JOIN_ROOM: "JOIN_ROOM",
		SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
	},
	SERVER: {
		ROOMS: "ROOMS",
		JOINED_ROOM: "JOINED_ROOM",
		ROOM_MESSAGE: "ROOM_MESSAGE",
	},
};

function socket({ io }: { io: Server }) {
	io.on(EVENTS.CONNECTION, (socket: Socket) => {
		socket.on("room", function (roomID) {
			socket.join(roomID);
		});

		socket.on(EVENTS.DISCONNECT, () => {
			console.log("[SOCKET] Client disconnected");
		});

		try {
			socket.on("CHAT_MESSAGE", async (message: any) => {
				console.log(message);
				socket.broadcast.emit("message", message);
			});
		} catch (error) {
			console.log("[CHAT_MESSAGE] Something went wrong");
		}
	});
}

export default socket;

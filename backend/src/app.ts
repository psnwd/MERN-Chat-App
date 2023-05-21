import cors from "cors";
import http from "http";
import express from "express";
import { Server } from "socket.io";
import * as bodyParser from "body-parser";

import socket from "./socket";
import path from "path";

const port = 4500;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/chat", express.static(path.join(__dirname, "/public")));

const server: http.Server = http.createServer(app);

export const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});

server.listen(port, () => {
	socket({ io });
	return console.log(`Express is listening at http://localhost:${port}`);
});

import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./pages/Chat";
import io from "socket.io-client";

const socket = io("ws://localhost:4500/", {
	reconnectionDelayMax: 10000,
});

function App() {
	const [messages, setMessages] = useState([]);
	const [userInput, setUserInput] = useState({
		user: "",
		message: "",
	});

	useEffect(() => {
		const handleMessage = (message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		};
		socket.on("message", handleMessage);
		return () => {
			socket.off("message", handleMessage);
		};
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInput({ ...userInput, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { user, message } = userInput;

		if (!message || !user) return;

		const messageObj = { user, message, time: new Date().toLocaleTimeString() };
		socket.emit("CHAT_MESSAGE", messageObj);
		setMessages((prevMessages) => [...prevMessages, messageObj]);
		setUserInput({ ...userInput, message: "" });
	};

	return (
		<div className="App">
			<Chat messages={messages} />

			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="user"
						value={userInput.user}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Message:
					<input
						type="text"
						name="message"
						value={userInput.message}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default App;

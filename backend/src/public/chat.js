const chatForm = document.getElementById("chat-form");

const socket = io();

socket.on("message", (message) => {
	console.log(message);
	outMessage(message);
});

chatForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = e.target.elements.username.value.trim();
	const message = e.target.elements.message.value.trim();

	if (!message && !user) return false;

	let json = JSON.parse(JSON.stringify({ user: user, message: message }));

	console.log(json);

	socket.emit("CHAT_MESSAGE", json);
	outMessage(json);

	e.target.elements.message.value = null;
	e.target.elements.message.focus();
});

function outMessage(message) {
	if (!Array.isArray(message)) {
		message = [message];
	}

	message.map((message) => {
		const div = document.createElement("div");
		div.classList.add("message");
		div.innerHTML = `<p><span class="msg-user">${message.user} : </span><span class="msg-content">${message.message}</span></p>`;
		document.querySelector(".message").appendChild(div);
	});
}

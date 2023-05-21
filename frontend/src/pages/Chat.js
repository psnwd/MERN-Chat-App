import React from "react";

function Chat({ messages }) {
	return (
		<>
			<h2>Chat Messages</h2>

			{messages &&
				messages.map((message, index) => {
					let messageContent;

					if (message.user === "rose") {
						messageContent = (
							<div key={index} className="container">
								<img
									src="/images/rose.png"
									alt="Avatar"
									style={{ width: "50%", height: "50%" }}
								/>
								<p>{message.message}</p>
								<span className="time-right">{message.time}</span>
							</div>
						);
					} else if (message.user === "jack") {
						messageContent = (
							<div key={index} className="container darker">
								<img
									src="/images/jack.png"
									alt="Avatar"
									style={{ width: "100%" }}
								/>
								<p>{message.message}</p>
								<span className="time-right">{message.time}</span>
							</div>
						);
					} else {
						messageContent = (
							<div key={index} className="container">
								<img
									src="/images/anon.jpeg"
									alt="Avatar"
									style={{ width: "100%" }}
								/>
								<p>{message.message}</p>
								<span className="time-right">{message.time}</span>
							</div>
						);
					}
					return messageContent;
				})}
		</>
	);
}

export default Chat;

# Simple Chat Application

This is a simple chat application built using Socket.IO and React. It allows users to chat with each other in real-time using a web interface. This README file provides an overview of the application's features, how to set it up, and how to use it.

## Features

- **Real-time Chat**: Users can send and receive messages in real-time without the need to refresh the page.
- **Chat Rooms**: Multiple chat rooms are available, allowing users to join different conversations.

## Technologies Used

- **Socket.IO**: A JavaScript library that enables real-time, bidirectional communication between clients and the server.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime used on the server-side.
- **Express**: A web application framework for Node.js.
- **HTML/CSS**: For the structure and styling of the user interface.

## Setup Instructions

Follow these steps to set up and run the chat application on your local machine:

1. **Clone the Repository**: Use Git to clone this repository to your local machine.

    ```bash
    git clone https://github.com/psnwd/MERN-Chat-App.git
    ``` 

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies for both the server and the client.

    ```bash
    cd MERN-Chat-App
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. **Start the Server**: Run the following command in the server directory to start the Node.js server.
    ```bash
    cd ../backend && npm start
    ```

    The server should now be running on http://localhost:3001.

4. **Start the Client**: In a separate terminal window, navigate to the client directory and start the React development server.
    ```bash
    cd ../frontend && npm start
    ```


The client application should now be accessible in your web browser at http://localhost:3000.

5. **Usage**: Open the application in multiple browser tabs or windows, sign in with unique usernames, and start chatting!

## Folder Structure

- `backend/`: Contains the Node.js server code.
- `frontend/`: Contains the React client application code.
- `README.md`: The main documentation file.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests with your enhancements or bug fixes. We welcome your contributions!

## License

This chat application is open-source and distributed under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the terms of the license.




# Socket Chat

A simple real-time chat application built with Node.js, Express, and Socket.IO that allows users to exchange messages instantly in the browser.

## Features

- Express server serves static files and HTML page
- Socket.IO handles real-time communication between clients
- Broadcasts messages from one user to all connected users
- Basic CSS styling and user interface

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sandra-satheesan/socket-chat.git
   cd socket-chat/socket-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the server:

```bash
npm start
```

> Note: make sure your `package.json` has a `start` script defined, e.g. `"start": "node index.js"`.

Open your browser and navigate to `http://localhost:3000`. Open multiple browser windows or tabs to see real-time chat functionality in action.

### Project Structure

```
socket-chat/
├── index.html       # client HTML with form and message list
├── styles.css       # basic styling
├── script.js        # client-side Socket.IO logic
├── index.js         # server-side Express + Socket.IO logic
├── package.json     # npm metadata and scripts
└── README.md        # this file
```

## Usage

- Type a message in the input field and click **Send** or press enter.
- Messages are broadcast to every connected client.
- The page automatically scrolls to show the latest message.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Built as a simple example of using Socket.IO for real-time web applications.

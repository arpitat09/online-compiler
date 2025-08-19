🖥️ Online Code Compiler






Live Demo: Click here to try
 (replace # with live URL if deployed)

Project Overview

The Online Code Compiler is a web-based application that allows users to write, compile, and execute JavaScript code directly in the browser. It provides an interactive and easy-to-use interface to test code snippets instantly. Built with React, CSS, and Node.js, this project demonstrates a simple full-stack setup with real-time code execution.

Features

Write JavaScript code in a browser editor.

Execute code and view output instantly.

Clean, responsive, and intuitive UI.

Modular backend structure for scalability.

Easily extensible to support multiple programming languages in the future.

Tech Stack

Frontend:

React.js

CSS

Axios

Backend:

Node.js

Express.js

child_process (to run JS code safely)

Body-parser & CORS

Folder Structure
online-code-compiler/
├── client/                # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── Editor.js
│   │       └── Output.js
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js
│   ├── package.json
│   └── routes/
│       └── compile.js
└── README.md

Screenshots
Editor & Output


Write your code and click Run Code to see the output.

Installation & Setup
Backend

Navigate to the server folder:

cd server


Install dependencies:

npm install


Start the backend server:

npm start


The server will run at http://localhost:5000
.

Frontend

Navigate to the client folder:

cd client


Install dependencies:

npm install


Start the frontend:

npm start


The app will run at http://localhost:3000
.

Usage

Open the frontend URL in your browser.

Type JavaScript code in the editor.

Click Run Code.

Output will appear in the Output section below the editor.

Sample Code
function greet(name) {
    return `Hello, ${name}! Welcome to the Online Compiler.`;
}

console.log(greet("Sanjeev"));


Expected Output:

Hello, Sanjeev! Welcome to the Online Compiler.

Future Enhancements

Support for multiple languages (Python, C++, Java, etc.)

Syntax highlighting using Monaco Editor or CodeMirror

Save and load code snippets for users

Real-time collaborative coding

Security improvements for sandboxed execution

Contributors

Your Name – Developer

Add team members if any

License

This project is licensed under the MIT License – see the LICENSE
 file for details.

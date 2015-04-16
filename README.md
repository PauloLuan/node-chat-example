# SocketIO Chat example

This is the source code for a very simple chat example used for 
the [Getting Started](http://socket.io/get-started/chat/) guide 
of the Socket.IO website.

# How to run:

	git clone 
	cd chat-example
	npm install && npm install -g nodemon
	nodemon server.js

Here are some ideas to improve the application:

- Add support for nicknames
- Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
- Add “{user} is typing” functionality
- Show who’s online
- Add private messaging

Share your improvements!

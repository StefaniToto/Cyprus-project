const express = require('express');
const app = express();
const http = require('http').createServer(app);
const fetch = require("node-fetch");
bodyParser = require("body-parser");
port = 3080;

const io = require('socket.io')(http, {
    cors: {
      origins: ['http://localhost:4200']
    }
  });



const users = [];
this.url = 'https://raw.githubusercontent.com/spinning-spindle/lab-fe/master/trip.geojson';
const fs = require('fs');


app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');

    fetch(this.url)
        .then(res => res.text())
        .then(json => res.end(json));

});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('my message', (msg) => {    
      console.log('message: ' + msg);
      io.emit('my broadcast', `server: ${msg}`);
    });


  });

  http.listen(3080, () => {
    console.log('listening on *:3080');
  });

// app.post('/api/user', (req, res) => {
//     const user = req.body.user;
//     users.push(user);
//     res.json("user addedd");
// });

// app.get('/', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');

//     fetch(this.url)
//         .then(res => res.text())
//         .then(json => res.end(json));

// });

// app.listen(port, () => {
//     console.log(`Server listening on the port::${port}`);
// });
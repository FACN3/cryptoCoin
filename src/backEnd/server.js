const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);
// const io = require('socket.io')(server);
var io = (module.exports.io = require('socket.io')(server));

const SocketManager = require('./SocketManager');
const router = require('./router');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../..')));
app.use(bodyParser.json());

app.use('/api', router);
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'index.html'));
});

io.on('connection', SocketManager);

server.listen(PORT, () => console.log(`Connected to port ${PORT}`));

// module.exports = io;

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
//
// const router = require('./router');
//
// const app = express();
// app.use(express.static(path.resolve(__dirname, '../..')));
// app.use(bodyParser.json());
//
// app.use('/api', router);
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../..', 'index.html'));
// });
//
// app.listen(8080, () => console.log('on 8080'));

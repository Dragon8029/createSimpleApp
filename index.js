const express = require('express');
const app = express();
//socket.io instantiation
const io = require("socket.io")(server);

//set the template engine ejs
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.render('index');
});
//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected');
});
//Listen on port 3000
server = app.listen(3000);
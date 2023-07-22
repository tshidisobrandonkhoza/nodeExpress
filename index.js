const express = require('express');
const app = express();
const http = require('http')
const port = 3000;
const hostname = `localhost`;

const morgan = require('morgan');

//add morgan dev use
app.use(morgan('dev'))

//find in the directory + root folder
app.use(express.static(__dirname + '/public'));

//request
app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});



const server = http.createServer(app);


server.listen(port, hostname, () => console.log(`listening on http://${hostname}:${port}`));

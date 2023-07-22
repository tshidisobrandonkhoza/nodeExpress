const express = require('express');
const app = express();
const http = require('http')
const port = 3000;
const hostname = `localhost`;
//const port = process.env.PORT || port;
//const www = process.env.WWW || './';
//app.use(express.static(www));


//request
app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});


//console.log(`serving ${www}`);
// app.get('*', (req, res) => {

//     // res.sendFile(`index.html`, { root: www });

// });
const server = http.createServer(app);


app.listen(port,hostname, () => console.log(`listening on http://${hostname}:${port}`));

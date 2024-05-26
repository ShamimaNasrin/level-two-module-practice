
// Module : 7-5
// ---------------------------------------------- Basic structure of a server -------------------------------------
const http = require('http');

//creating a server using raw node.js
const server1 = http.createServer()

// listener
server1.on('request', (req, res) => {
    console.log(req);
    res.end("hello world!");
})

server1.listen(5000, () => {
    console.log(`server is listening on port 5000`);
})


// ------------------------------------------------------- Streaming example -------------------------------------------------------------
const http = require('http');
const fs = require('fs')

//creating a server using raw node.js
const server = http.createServer()

// listener
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    // streaming file reading
    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

    // we have to listen (.on) the stream that comes like chunk by chunk  and write the response
    readableStream.on('data', (buffer) => {
        res.write(buffer)
    })

    // listen the process to end and when it end, end the response
    readableStream.on('end', () => {
        res.end('The streaming is over !')
    })

})

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
})


// module : 7-6

// --------------------------------------------------- add status code and error handling ------------------------------------------------
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    // streaming file reading
    const readableStream = fs.createReadStream(process.cwd() + '/texts/readbhul.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })

    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end('The streaming is over !')
    })

    readableStream.on('error', (error) => {
        console.log(error);
        res.statusCode = 500;
        res.end('Something went wrong!')
    })


})

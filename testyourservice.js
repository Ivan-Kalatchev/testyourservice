var http = require('http');

console.log("\x1b[31m", "testyourservice running on port 1025")

http.createServer(function (req, res) {

    console.log("\x1b[37m", req.method + " -> " + req.url);

    if (req.method == "POST") {
        req.on('data', chunk => {
            console.log(`Data chunk available: ${chunk}`)
        })
    }

    res.statusCode = 200;
    res.end();
}).listen(1025);
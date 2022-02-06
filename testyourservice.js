var http = require('http');
http.createServer(function (req, res) {

    console.log(req.method + " -> " + req.url);

    if (req.method == "POST") {
        req.on('data', chunk => {
            console.log(`Data chunk available: ${chunk}`)
        })
    }

    res.statusCode = 200;
    res.end();
}).listen(process.argv[2]);
var http = require("http");

const httpServer = http.createServer(handleServer);

let statusCode = 200;
function handleServer(req, res) {
    if(req.url === "/"){
        res.write("Welcome to my server at 8081..");
        res.end();
    }
    if(req.url === "/welcome"){
        res.write("Should serve the content of type text/plain")
        res.end();
    }
    if(req.url === "/contact"){
        res.write("Returned status should be 200")
        res.end();
    } 
}
httpServer.listen(8081,statusCode, ()=>{
    console.log('listening server at port 8081...');
    console.log('status code to get request... 200');
});

module.exports = httpServer;
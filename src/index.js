var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081, ()=>{
    console.log("Server is listening on port 8081...");
});

const data = {  
    phone: '18602100000', 
  	email: 'guestcaredominos@jublfood.com' 
}
const objData = JSON.stringify(data);

function handleServer(req, res) {
    const url = req.url;
  if(url == "/welcome"){
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write("Welcome to Dominos!");
    res.end();
  }
  else if(url == "/contact"){
    res.writeHead(200, {'content-type' : 'application/json'});
    res.write(objData);
    res.end();
  }
  else{
    res.writeHead(404);
    res.write("404 Page not found");
    res.end();
  }
}

module.exports = httpServer;
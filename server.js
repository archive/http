var server = require("express").createServer();

server.get("/", function(request, response) {
	response.send("yeah, or?");
});

server.listen(11637);

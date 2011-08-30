var express = require('express');
var app = module.exports = express.createServer();
var port = 11637;

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    //app.set('view engine', 'jade');
    app.set('view options', { layout: false });

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get("/", function(request, response) {
	response.render('index', {
        locals: { message: "bill" }
    });
});

app.listen(port);

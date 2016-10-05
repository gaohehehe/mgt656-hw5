var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/colorful-stingray', function(request, response){
    response.send('This is the response from my nickname page!');
});

app.listen(process.env.PORT || 4000, process.env.IP||'localhost');
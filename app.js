var express = require('express');
var path    = require('path');
var app 	= express();
var http    = require('http').Server(app);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function(req, res) {
    res.sendFile('index.html', {
      root: './views'
    });
  });

/**
 * Iniciamos la aplicación en el puerto 3000
 */
http.listen(3000, function() {
    console.log('listening on *:3000');
});
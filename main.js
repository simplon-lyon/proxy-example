var express = require('express');
var proxy = require('express-http-proxy');

var app = express();

//simplonlyon.fr/promo3/jdemel/app/monApp1
app.use('/monApp1', proxy('http://localhost:4000'));
//simplonlyon.fr/promo3/jdemel/app/monApp2
app.use('/monApp2', proxy('http://localhost:4001'));
app.listen(3001);

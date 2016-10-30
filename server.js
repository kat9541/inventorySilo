var app = require('./app');
var data_handler = require('./data_handler');

app.set('port', process.env.PORT || 3000);

//var server = app.listen(app.get('port'), '0.0.0.0');
var server = app.listen(app.get('port'), '127.0.0.1');
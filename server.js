var app = require('./app');


app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), '0.0.0.0');
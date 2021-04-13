const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/api/routes', require('./routes/rutas'));
//settings
app.set('port', process.env.PORT || process.env.YOUR_PORT || 3000);

app.use(function(req, res, next) {
    res.status(404).json({"message": "Not found"});
});

<<<<<<< HEAD
app.use(express.static('client/build'));

=======
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
>>>>>>> bcfd13ad18dba30f961389f69fe91f3e5a7e57eb
module.exports = app;
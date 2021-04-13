require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.uri;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log("The db is online!");
});
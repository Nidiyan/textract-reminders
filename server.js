const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	next();
});

app.use(require("./config/startup"));

port = process.env.NODE_ENV || 8000;

app.listen(port, () => {
	console.log("Listening on port " + port);
});
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(routes);
require('./database')
const port = 3333
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// GET
app.get('/tasks', async (req, res) => {
	try{
	} catch (err) {
		throw err;
	}
});

// POST
app.post('/tasks', async (req, res) => {
	let task = req.body;
	try{
	} catch (err) {
		throw err;
	}
});

app.put('/tasks', async (req, res) => {
	let task = req.body;
	try {
	} catch (err) {
		throw err;
	}
});

app.delete('/tasks', async (req, res) => {
	let id = red.query.id;
	try{
	} catch (err) {
		throw err;
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));

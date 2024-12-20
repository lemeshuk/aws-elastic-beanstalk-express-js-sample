const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from AWS DevOps journey! Nicely done :) testing123'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

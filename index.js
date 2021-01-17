const express = require('express');
const routes = require('./src/routes/index.js');

const app = express();

app.get('/', (req, res) => res.send('hello world'));
app.use('/', routes);

app.listen(3000);
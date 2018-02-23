'use strict';

const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello Git!'));

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
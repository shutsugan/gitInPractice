'use strict';

const express = require('express');
const route = require('./routes/');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

route(app);

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
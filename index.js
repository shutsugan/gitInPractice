'use strict';

const express = require('express');
const route = require('./routes');
const port = 3000;

const app = express();

route.route(app);

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
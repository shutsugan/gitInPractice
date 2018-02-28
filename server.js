'use strict';

const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Git home page.'));

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
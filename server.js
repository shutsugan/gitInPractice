'use strict';

const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => res.send('Git home page.'));
app.get('/git', (req, res) => res.send('The Git sub dir'));

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
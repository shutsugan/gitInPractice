'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => res.send('Heloo git'));

app.listen(3000, _ => console.log(`Git server runing on port 3000`));

//Some changes to test the pull request.
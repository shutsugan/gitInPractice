'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Git home page.'));

app.listen(3000, _ => console.log(`Git server runing on port 3000`));

//TODO: this is the a comment to trigger the conflict.
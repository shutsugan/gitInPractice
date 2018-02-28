'use strict';

const express = require('express');
<<<<<<< HEAD
=======
const path = require('path');
const port = 3000;
>>>>>>> second-chapter

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, _ => console.log(`Git server runing on port 3000`));

//TODO: this is the a comment to trigger the conflict.
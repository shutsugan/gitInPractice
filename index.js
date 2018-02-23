'use strict';

const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello Git!'));
app.get('/posts', (req, res) => res.send('Posts page'));
app.get('/post', (req, res) => res.send('Post page'));
app.get('/about', (req, res) => res.send('About page'));
app.get('/contact', (req, res) => res.send('Contact page'));

app.post('/post', (req, res) => res.send('App post page'));
app.put('/post', (req, res) => res.send('Update post page'));
app.delete('/post', (req, res) => res.send('Delete post page'));

app.listen(port, _ => console.log(`Git server runing on port ${port}`));
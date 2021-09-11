const express = require('express');
const server = express();

const helmet = require('helmet');
const { logger } = require('./projects/projects-middleware');
const projectsRouter = require('./projects/projects-router');

server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectsRouter);

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
    res.send(`
    <h1>My App is Working!</h1>
    `)
});


module.exports = server;

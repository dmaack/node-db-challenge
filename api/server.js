const express = require('express');
const projectRouter = require('./routers/project-router')
const server = express();



server
    .use(express.json())
    .use(logger)
    // .use('/', (req, res) => {
    //     res.status(404).send('Aint nobody got time for that!')
    // })

server.use('/api/projects', projectRouter);
// server.use('/api/resources', resourcesRouter);

server.get('/', (req, res) => {
    res.send(`<h2> Let's write a Project Builder API! </h2>`)
})       

// Cutsom Middleware

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('origin')}`)

    next();
}

module.exports = server;
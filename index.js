require('dotenv').config();

const express = require('express');

const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 9000;

server.get('/', (req, res) => {
    res.json({ message: 'Hello from express!'})
});

server.use('*', (req,res) => {
    res.send(`<h1>Hey there!</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})



server.listen(port, () => {
    console.log(`server listening on port ${port}`)
});
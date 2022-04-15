const express = require('express');

const api = require('./backend/routes');

const app = express();

const PORT = 3080;

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.use('/api', api)

app.listen(PORT);
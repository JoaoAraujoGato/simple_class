const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

var cors = require('cors')


const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

// Padrão para Rotas do Back, todas irão começar com o /api
app.use('/api', api)

const PORT = process.env.PORT;

app.listen(PORT);
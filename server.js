require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')


const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.status(403).json(
        {
            success: true,
            message: 'Erro, rota incompleta'
        }
    );
});

// Padrão para Rotas do Back, todas irão começar com o /api
app.use('/api', api)

const PORT = process.env.PORT_BACK;

app.listen(PORT);
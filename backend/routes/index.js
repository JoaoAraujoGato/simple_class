const router = require('express').Router();

require('../db/mongoConnection');

const user = require('./user.routes');

// Nenhuma rota /api deve ser chamada sem um complemento
router.get('/', (req, res) => {
    res.json(
        {
            success: true,
            message: 'Erro, caminho incompleto'
        }
    )
})

router.use('/user', user)

module.exports = router
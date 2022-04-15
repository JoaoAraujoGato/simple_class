const router = require('express').Router();

require('../db/mongoConnection');

const user = require('./user.routes');

router.get('/', (req, res) => {
    res.json(
        {
            success: true,
            message: 'Erro'
        }
    )
})

router.use('/user', user)

module.exports = router
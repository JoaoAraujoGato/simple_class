const router = require('express').Router();

require('../db/mongoConnection');

const simpleClass = require('./simple_class');

router.get('/', (req, res) => {
    res.json(
        {
            success: true,
            message: 'Erro'
        }
    )
})

router.use('/simple_class', simpleClass)

module.exports = router
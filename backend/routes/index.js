const router = require('express').Router();

const simple_class = require('./simple_class');

router.get('/', (req, res) => {
    res.json(
        {
            success: true,
            message: 'Erro'
        }
    )
})

router.use('/simple_class', simple_class)

module.exports = router
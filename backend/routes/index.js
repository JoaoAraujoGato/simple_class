const router = require('express').Router();
require('../db/mongoConnection');

const user = require('./user.routes');
const course = require('./course.routes');
const quiz = require('./quiz.routes');
const answer = require('./answer.routes');

// Nenhuma rota /api deve ser chamada sem um complemento
router.get('/', (req, res) => {
    return res.status(403).json(
        {
            success: true,
            message: 'Erro, rota incompleta'
        }
    )
});

router.use('/user', user);
router.use('/course', course);
router.use('/quiz', quiz);
router.use('/answer', answer);

module.exports = router
const router = require('express').Router();

const QuizController = require('../controllers/quizController');

const auth = require('../middlewares/authentication');

router.post('/', auth.authenticateToken, QuizController.create);        // create (post -> /api/course)
router.get('/', auth.authenticateToken, QuizController.index);          // list all (get -> /api/course)
router.get('/:id', auth.authenticateToken, QuizController.getById);     // get one (get -> /api/course/:id)
router.patch('/:id', auth.authenticateToken, QuizController.updateOne); // update one (patch -> /api/course/:id)
router.delete('/:id', auth.authenticateToken, QuizController.delete);   // delete one (delete -> /api/course/:id)

module.exports = router;
const router = require('express').Router();

const AnswerController = require('../controllers/answerController');

const auth = require('../middlewares/authentication');

router.post('/', auth.authenticateToken, AnswerController.create);        // create (post -> /api/course)
router.get('/', auth.authenticateToken, AnswerController.index);          // list all (get -> /api/course)
router.get('/:id', auth.authenticateToken, AnswerController.getById);     // get one (get -> /api/course/:id)
router.patch('/:id', auth.authenticateToken, AnswerController.updateOne); // update one (patch -> /api/course/:id)
router.delete('/:id', auth.authenticateToken, AnswerController.delete);   // delete one (delete -> /api/course/:id)

module.exports = router;
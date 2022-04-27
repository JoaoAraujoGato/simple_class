const router = require('express').Router();

const UserController = require('../controllers/userController');
const SessionController = require('../controllers/sessionController');

const auth = require('../middlewares/authentication');

router.post('/login', SessionController.signIn);

router.post('/', UserController.create);                                // create (post -> /api/user)
router.get('/', auth.authenticateToken, UserController.index);          // list all (get -> /api/user)
router.get('/byFilter', UserController.getByFilter);                    // get by filter (get -> /api/user/byfilter)
router.get('/:id', auth.authenticateToken, UserController.getById);     // get one (get -> /api/user/:id)
router.patch('/:id', auth.authenticateToken, UserController.updateOne); // update one (patch -> /api/user/:id)
router.delete('/:id', auth.authenticateToken, UserController.delete);   // delete one (delete -> /api/user/:id)

module.exports = router;
const router = require('express').Router();
const User = require('../models/User');

const UserController = require('../controllers/UserController');

router.post('/', UserController.create);        // create (post -> /api/user)
router.get('/', UserController.index);          // list all (get -> /api/user)
router.get('/:id', UserController.getById);     // get one (get -> /api/user/:id)
router.patch('/:id', UserController.updateOne); // update one (patch -> /api/user/:id)
router.delete('/:id', UserController.delete);   // delete one (delete -> /api/user/:id)

module.exports = router;
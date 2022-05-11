const router = require('express').Router();

const CourseController = require('../controllers/courseController');

const auth = require('../middlewares/authentication');

router.post('/', auth.authenticateToken, CourseController.create);        // create (post -> /api/course)
router.get('/', CourseController.index);          // list all (get -> /api/course)
router.get('/byFilter', CourseController.getByFilter);                    // get by filter (get -> /api/user/byfilter)
router.get('/:id', CourseController.getByCourseId);     // get one (get -> /api/course/:id)
router.get('/owner/:ownerId', auth.authenticateToken, CourseController.getByOwnerId);
router.patch('/:id', auth.authenticateToken, CourseController.updateOne); // update one (patch -> /api/course/:id)
router.delete('/:id', auth.authenticateToken, CourseController.delete);   // delete one (delete -> /api/course/:id)

module.exports = router;
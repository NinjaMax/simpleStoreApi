const Router = require('express');
const userController = require('../controllers/userController');
const authCheck = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authCheck, userController.check);
router.get('/', checkRole('ADMIN'), userController.getAll);
router.post('/update', checkRole('ADMIN'), userController.update);


module.exports = router;
const Router = require('express');
const basketController = require('../controllers/basketController');
const checkRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/add', basketController.create);
router.post('/update', checkRole('ADMIN'), basketController.update);
router.post('/destroy', checkRole('ADMIN'), basketController.destroy);
router.get('/', checkRole('ADMIN'), basketController.getAll);
router.get('/:id', checkRole('ADMIN'), basketController.getOne);


module.exports = router;
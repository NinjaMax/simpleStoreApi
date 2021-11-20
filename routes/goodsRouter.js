const Router = require('express');
const goodsController = require('../controllers/goodsController');
const checkRole = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/create', checkRole('ADMIN'), goodsController.create);
router.post('/update', checkRole('ADMIN'), goodsController.update);
router.post('/destroy', checkRole('ADMIN'), goodsController.destroy);
router.get('/',  goodsController.getAll);
router.get('/:id', goodsController.getOne);


module.exports = router;
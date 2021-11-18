const Router = require('express');
const goodsController = require('../controllers/goodsController');

const router = new Router();

router.post('/', goodsController.create);
router.get('/', goodsController.getAll);
router.get('/:id', goodsController.getOne);


module.exports = router;
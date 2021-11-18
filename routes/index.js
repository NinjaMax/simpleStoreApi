const Router = require('express');
const goodsRouter = require('./goodsRouter');
const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/goods', goodsRouter);


module.exports = router;
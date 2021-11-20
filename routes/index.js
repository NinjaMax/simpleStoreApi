const Router = require('express');
const goodsRouter = require('./goodsRouter');
const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/goods', goodsRouter);
router.use('/basket', basketRouter)


module.exports = router;
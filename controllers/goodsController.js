const {Goods} = require('../models/models');

class GoodsController {
    async create(req, res) {
        const {name, price, brandId, categoryId} = req.body;
        const goods = await Goods.create({name, price, brandId, categoryId});
        return res.json(goods);
    }

    async update(req, res) {
        const {name, price, brandId, categoryId} = req.body;
        const goods = await Goods.update({name, price, brandId, categoryId});
        return res.json(goods);
    }

     async destroy(req, res) {
        const {name, price, brandId, categoryId} = req.body;
        const goods = await Goods.destroy({name, price, brandId, categoryId});
        return res.json(goods);
    }

    async getAll(req, res) {
        const {brandId, categoryId} = req.body;
        let device;
        if(!brandId && !categoryId) {
            device = await Goods.findAll();
        }
        if(!brandId && categoryId) {
            device = await Goods.findAll({where: {brandId}});
        }
        if(brandId && !categoryId) {
            device = await Goods.findAll({where: {categoryId}});
        } 
        if(brandId && categoryId) {
            device = await Goods.findAll({where: {brandId,categoryId}});
        }

        return res.json(device);
    }

    async getOne(req, res) {
        
    }


 }

 module.exports = new GoodsController();
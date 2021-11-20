const {Goods} = require('../models/models');

class GoodsController { 
    async create(req, res) {
        const {name, price, quantity, brandId, categoryId} = req.body;
        const goods = await Goods.create({name, price, quantity, brandId, categoryId});
        
        return res.json(goods);
    }

    async update(req, res, error) {
       
           try {
                const {id, name, price, brandId, categoryId} = req.body;
                const goodsUpdate = await Goods.update({name, price, brandId, categoryId}, 
                {where: {id: req.body.id}});
                return res.json({goodsUpdate});
           } catch (error) {
               console.log("Data is incorrect!!!")
           } 
            
        }

     async destroy(req, res) {

        const {id} = req.body;
        const goodsDestroy = await Goods.destroy({where: {id: req.body.id}});
        
        return res.json({goodsDestroy});
    }

    async getAll(req, res) {
        const {brandId, categoryId} = req.query;
        let device;
        if(!brandId && !categoryId) {
            device = await Goods.findAll();
        }
        if(brandId && !categoryId) {
            device = await Goods.findAll({where: {brandId}});
        }
        if(!brandId && categoryId) {
            device = await Goods.findAll({where: {categoryId}});
        } 
        if(brandId && categoryId) {
            device = await Goods.findAll({where: {brandId, categoryId}});
        }

        return res.json(device);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const goods = await Goods.findOne({where: {id}});
        
        return res.json(goods);
    }


}

 module.exports = new GoodsController();
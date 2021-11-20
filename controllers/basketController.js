const {BasketGoods} = require('../models/models');

class BasketController { 
    async create(req, res) {
        const {id, brandId, categoryId, name, price, quantity} = req.body;
        if(price <= 0 || quantity <= 0) {
         return res.status(401).json({message: "Not enough ordering data. Order cancelled.!!!"});
      }
        const basket = await BasketGoods.create({name, price, quantity, 
        goodId: req.body.id, brandId, categoryId});

        return res.json(basket);
    }

    async update(req, res, error) {
       
           try {
               const {id, brandId, categoryId, name, price, quantity} = req.body;
                const basketUpdate = await BasketGoods.update({ price, quantity}, 
                {where: {id: req.body.id}});
                return res.json({basketUpdate});
           } catch (error) {
               res.status(401).json({message: "Data ID is incorrect!!!"});
           } 
            
        }

     async destroy(req, res) {

        const {id} = req.body;
        const basketDestroy = await BasketGoods.destroy({where: {id: req.body.id}});
        
        return res.json({basketDestroy});
    }

    async getAll(req, res) {
    
        const basket = await BasketGoods.findAll();
       
        return res.json(basket);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const basket = await BasketGoods.findOne({where: {id}});
        
        return res.json(basket);
    }

}

 module.exports = new BasketController();
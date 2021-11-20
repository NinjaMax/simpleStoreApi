const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'CUSTOMER'}
});
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    
    
});
const BasketGoods = sequelize.define('basket_goods', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    quantity: {type: DataTypes.INTEGER, defaultValue: 1},
});
const Goods = sequelize.define('goods', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    quantity: {type: DataTypes.INTEGER, defaultValue: 1},
    img: {type: DataTypes.STRING, allowNull: true}
});
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}  
});
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
    });
const CategoryBrand = sequelize.define('category_brand', {
    id: {type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true}
});

    User.hasOne(Basket);
    Basket.belongsTo(User);

    Basket.hasMany(BasketGoods);
    BasketGoods.belongsTo(Basket);

    Category.hasMany(Goods);
    Goods.belongsTo(Category);

    Brand.hasMany(Goods);
    Goods.belongsTo(Brand);

    Goods.hasMany(BasketGoods);
    BasketGoods.belongsTo(Goods);

    Category.hasMany(BasketGoods);
    BasketGoods.belongsTo(Category);

    Brand.hasMany(BasketGoods);
    BasketGoods.belongsTo(Brand);


    Category.belongsToMany(Brand, {through: CategoryBrand});
    Brand.belongsToMany(Category, {through: CategoryBrand});

    module.exports = {
        User, Basket,
        BasketGoods, Goods,
        Category, Brand,
        CategoryBrand
    };
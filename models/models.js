const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true}
 
});
const BasketGoods = sequelize.define('basket_goods', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
});
const Goods = sequelize.define('goods', {
    id: {type: DataTypes.INTEGER, 
         primaryKey: true,
         autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
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

    Category.belongsToMany(Brand, {through: CategoryBrand});
    Brand.belongsToMany(Category, {through: CategoryBrand});

    module.exports = {
        User, Basket,
        BasketGoods, Goods,
        Category, Brand,
        CategoryBrand
    };
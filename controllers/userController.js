 const bcrypt = require('bcrypt');
 const {User, Basket} = require('../models/models');
 const jwt = require('jsonwebtoken');
 
 const jwtGenerate = (id, email, role) => {
   return  jwt.sign({id, email, role}, 
           process.env.SECRET_KEY_TOKEN, {expiresIn: '24h'});

 };

 class UserController {
    async registration(req, res, error) {
      const {email, password, role} = req.body;
      if(!email || !password) {
         return res.status(401).json({message: "Error: Incorrect Email or Password!!!"});
      }
      const customer = await User.findOne({where: {email}});
      if(customer) {
        return res.status(401).json({message: "Customer with such email exists!!!"});
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const user = await User.create({email, role, password: hashPassword});
      const basket = await Basket.create({userId: user.id});
      const token = jwtGenerate (user.id, user.email, user.role);

      return res.json({token}); 
    }
    
    async login(req, res) {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});
      if(!user) {
        return res.status(401).json({message: "Customer doesn't Exist!!"});
      }

      let comparePassword = bcrypt.compareSync(password, user.password);
      if(!comparePassword) {
        return res.status(401).json({message:"Wrong Password!!!"});
      }

      const token = jwtGenerate(user.id, user.email, user.role);

      return res.json({token});
    }

    async check(req, res, next) {
      const token = jwtGenerate(req.user.id, req.user.email, req.user.role);

      return res.json({token});    
    }

    async getAll(req, res) {
      const users = await User.findAll();
        
      return res.json({users});
    }

    async update(req, res) {
      
      const {id, email, role} = req.body;
      const usersUpdate = await User.update({email, role}, 
      {where: {id: req.body.id}});
          
      return res.json({usersUpdate});      
    }
 }

 module.exports = new UserController();
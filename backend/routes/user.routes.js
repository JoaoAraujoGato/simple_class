const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try{
        const usuarios = await User.find();
    
        res.json({
            success: true,
            data: usuarios
        })
    }
    catch(err){
        res.json({
            success: false,
            message: err
        })
    }
});

router.post('/', async (req, res) => {
    const usuario = new User({
        name: req.body.name,
        birth: req.body.birth,
        email: req.body.email,
        phone: req.body.phone,
        cpf: req.body.cpf,
    });

    try{
        const savedUser = await usuario.save();
        res.json({
            success:true,
            data: savedUser
        })
    }
    catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

module.exports = router
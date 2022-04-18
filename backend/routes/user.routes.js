const router = require('express').Router();
const User = require('../models/User');

// create (post -> /api/user)
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
});

// list all (get -> /api/user)
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

// get one (get -> /api/user/:id)
router.get('/:id', async (req, res) => {
    try{
        const usuarios = await User.findOne({
            _id: req.params.id
        });
    
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

// update ()
router.patch('/:id', async (req, res) => {
    try{
        const updatedUser = await User.updateOne({
            _id: req.params.id,
        },
            req.body
        );
        
        return res.status(200).json({ 
            success: true, 
            notification: "User update sucesfully",
            updated: updatedUser.modifiedCount
        });

    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

// delete ()
router.delete('/:id', async (req, res) => {
    try{
        const usuarios = await User.deleteOne({
            _id: req.params.id
        });
    
        res.json({
            success: true,
            notification: "User deleted sucesfully",
        })
    }
    catch(err){
        res.json({
            success: false,
            message: err
        })
    }
});

module.exports = router
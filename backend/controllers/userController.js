const User = require('../models/user');
const Firebase = require('../utils/Firebase');

module.exports = {
    async create(req, res){
        try{
            const usuario = new User({
                type: req.body.type,
                name: req.body.name,
                birth: req.body.birth,
                email: req.body.email,
                phone: req.body.phone,
                cpf: req.body.cpf,
            });
            
            const uid = await Firebase.createNewUser(usuario.email, req.body.password);

            delete req.body.password;
            usuario.firebase_id = uid;

            const savedUser = await usuario.save();
            return res.status(200).json({
                Success: true,
                Data: savedUser
            })
        }
        catch(err){
            console.warn("User creation failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification: "Internal server error while trying to create User",
            })
        }
    },

    async index(req, res){
        try{
            const usuarios = await User.find();
    
            return res.status(200).json({
                Success: true,
                Data: usuarios
            })
        }catch(err){
            console.warn("User index failed: " + err);
            return res.status(500).json({
                Success: false,
            })
        }
    },

    async getById(req, res){
        try{
            const result = await User.findOne({
                _id: req.params.id
            });
        
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("User getBId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get User",
            })
        }
    },

    async getByFilter(req, res){
        try{
            const { type, name, email } = req.query;
            let result;
            if(type){
                result = await User.find({
                    type: type
                });
            }
            if (name){
                result = result.filter((usuario)=>usuario.name === name);
            }
            if(email){
                result = result.filter((usuario)=>usuario.email === email);
            }
            return res.json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("User getByFilter failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Users",
            })
        }
    },

    async updateOne(req, res){
        try{
            const result = await User.updateOne({
                _id: req.params.id,
            },
                req.body
            );
            
            return res.status(200).json({ 
                Success: true, 
                Notification: "User update sucesfully",
                updated: result.modifiedCount
            });
        }catch(err){
            console.warn("User update failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to update User",
            })
        }
    },

    async delete(req, res){
        try{
            const result = await User.deleteOne({
                _id: req.params.id
            });
            
            if (result.deletedCount === 0){
                return res.status(400).json({ 
                    Success: true,
                    Notification: "user_id not found"
                });
            }

            return res.status(200).json({
                Success: true,
                Notification: "User deleted sucesfully",
            })
        }catch(err){
            console.warn("User delete failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get User",
            })
        }
    },
}
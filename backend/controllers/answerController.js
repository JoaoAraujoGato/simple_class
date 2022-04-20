const Answer = require('../models/answer');

module.exports = {
    async create(req, res){
        try{
            const answer = new Answer({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                duration: req.body.duration,
                ownerId: req.body.ownerId,
            });
            
            const savedAnswer = await answer.save();
            return res.status(200).json({
                Success: true,
                Data: savedAnswer
            })
        }
        catch(err){
            console.warn("Answer creation failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification: "Internal server error while trying to create Answer",
            })
        }
    },

    async index(req, res){
        try{
            const answers = await Answer.find();
    
            return res.status(200).json({
                Success: true,
                Data: answers
            })
        }catch(err){
            console.warn("Answer index failed: " + err);
            return res.status(500).json({
                Success: false,
            })
        }
    },

    async getById(req, res){
        try{
            const result = await Answer.findOne({
                _id: req.params.id
            });
        
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("Answer getBId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Answer",
            })
        }
    },

    async updateOne(req, res){
        try{
            const result = await Answer.updateOne({
                _id: req.params.id,
            },
                req.body
            );
            
            return res.status(200).json({ 
                Success: true, 
                Notification: "Answer update sucesfully",
                updated: result.modifiedCount
            });
        }catch(err){
            console.warn("Answer update failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to update Answer",
            })
        }
    },

    async delete(req, res){
        try{
            const result = await Answer.deleteOne({
                _id: req.params.id
            });
            
            if (result.deletedCount === 0){
                return res.status(400).json({ 
                    Success: true,
                    Notification: "Answer_id not found"
                });
            }

            return res.status(200).json({
                Success: true,
                Notification: "Answer deleted sucesfully",
            })
        }catch(err){
            console.warn("Answer delete failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Answer",
            })
        }
    },
}
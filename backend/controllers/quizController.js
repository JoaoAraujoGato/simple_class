const Quiz = require('../models/quiz');

module.exports = {
    async create(req, res){
        try{
            const quiz = new Quiz({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                duration: req.body.duration,
                ownerId: req.body.ownerId,
            });
            
            const savedQuiz = await quiz.save();
            return res.status(200).json({
                Success: true,
                Data: savedQuiz
            })
        }
        catch(err){
            console.warn("Quiz creation failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification: "Internal server error while trying to create Quiz",
            })
        }
    },

    async index(req, res){
        try{
            const quizzes = await Quiz.find();
    
            return res.status(200).json({
                Success: true,
                Data: quizzes
            })
        }catch(err){
            console.warn("Quiz index failed: " + err);
            return res.status(500).json({
                Success: false,
            })
        }
    },

    async getById(req, res){
        try{
            const result = await Quiz.findOne({
                _id: req.params.id
            });
        
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("Quiz getBId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Quiz",
            })
        }
    },

    async updateOne(req, res){
        try{
            const result = await Quiz.updateOne({
                _id: req.params.id,
            },
                req.body
            );
            
            return res.status(200).json({ 
                Success: true, 
                Notification: "Quiz update sucesfully",
                updated: result.modifiedCount
            });
        }catch(err){
            console.warn("Quiz update failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to update Quiz",
            })
        }
    },

    async delete(req, res){
        try{
            const result = await Quiz.deleteOne({
                _id: req.params.id
            });
            
            if (result.deletedCount === 0){
                return res.status(400).json({ 
                    Success: true,
                    Notification: "Quiz_id not found"
                });
            }

            return res.status(200).json({
                Success: true,
                Notification: "Quiz deleted sucesfully",
            })
        }catch(err){
            console.warn("Quiz delete failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Quiz",
            })
        }
    },
}
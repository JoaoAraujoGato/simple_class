const Course = require('../models/course');

module.exports = {
    async create(req, res){
        try{
            const curso = new Course({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                duration: req.body.duration,
                ownerId: req.body.ownerId,
            });
            
            const savedCourse = await curso.save();
            return res.status(200).json({
                Success: true,
                Data: savedCourse
            })
        }
        catch(err){
            console.warn("Course creation failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification: "Internal server error while trying to create Course",
            })
        }
    },

    async index(req, res){
        try{
            const cursos = await Course.find();
    
            return res.status(200).json({
                Success: true,
                Data: cursos
            })
        }catch(err){
            console.warn("Course index failed: " + err);
            return res.status(500).json({
                Success: false,
            })
        }
    },

    async getById(req, res){
        try{
            const result = await Course.findOne({
                _id: req.params.id
            });
        
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("Course getBId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Course",
            })
        }
    },

    async updateOne(req, res){
        try{
            const result = await Course.updateOne({
                _id: req.params.id,
            },
                req.body
            );
            
            return res.status(200).json({ 
                Success: true, 
                Notification: "Course update sucesfully",
                updated: result.modifiedCount
            });
        }catch(err){
            console.warn("Course update failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to update Course",
            })
        }
    },

    async delete(req, res){
        try{
            const result = await Course.deleteOne({
                _id: req.params.id
            });
            
            if (result.deletedCount === 0){
                return res.status(400).json({ 
                    Success: true,
                    Notification: "course_id not found"
                });
            }

            return res.status(200).json({
                Success: true,
                Notification: "Course deleted sucesfully",
            })
        }catch(err){
            console.warn("Course delete failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Course",
            })
        }
    },
}
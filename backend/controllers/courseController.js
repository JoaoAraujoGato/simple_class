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
                ownerName: req.body.ownerName,
                createdAt: req.body.createdAt
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

    async getByCourseId(req, res){
        try{
            const result = await Course.findOne({
                _id: req.params.id
            });
        
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("Course getByCourseId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Course",
            })
        }
    },

    async getByFilter(req, res){
        try{            
            const { category, price } = req.query;
            console.log(category, price)
            let result;
            if(category !== undefined && price === undefined){
                result = await Course.find({
                    category: category
                });
            } if (category === undefined && price !== undefined){
                result = await Course.find({
                    price: {"$lte": price}
                });
            }if (category !== undefined && price !== undefined){
                result = await Course.find({
                    category: category,
                    price: price
                });
            }
            return res.json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("Course getByFilter failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get Courses",
            })
        }
    },

    async getByOwnerId(req, res){
        try{
            const result = await Course.find({
                ownerId: req.params.ownerId
            });
            return res.status(200).json({
                Success: true,
                Data: result
            })
        }catch(err){
            console.warn("User getByOwnerId failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get by Owner ID",
            })
        }
    },

    async getByStudentCourses(req, res){
        try{
            const studentCourses = req.body;
        }catch(err){
            console.warn("User getByStudent failed: " + err);
            return res.status(500).json({
                Success: false,
                Notification : "Internal server error while trying to get User",
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

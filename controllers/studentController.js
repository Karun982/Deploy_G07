const {student} = require("../models/studentModel")

// CRUD Application
// Create Student

const createStudent = async(req,res)=>{
    try{
        // req.body = {"rollno":101,"name":"aman","email":"aman@gmail.com"}
        const std = await student.create(req.body)
        res.send({
            "message":"Student saved successfully",
            "student":std
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {createStudent}
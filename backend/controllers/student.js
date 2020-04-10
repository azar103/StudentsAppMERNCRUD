const Student = require('../models/student')

exports.createStudent = (req, res, next) => {
    delete req.body._id
    const student = new Student({ ...req.body })
    student.save()
           .then(() => res.status(201).json({ message: 'Objet enregistré!'}) )
           .catch((error) =>  console.log({error}))
}

exports.updateStudent = (req, res, next) => {
   Student.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
           .then(() => res.status(200).json({ message: 'Objet modifié!'}) )
           .catch((error) =>  console.log({error}))    
}

exports.deleteStudent = (req, res, next) => {
    Student.deleteOne({_id: req.params.id})
           .then(() => res.status(200).json({ message:'Objet supprimé !'}))
           .catch((error) =>  console.log({error})) 
}

exports.getStudent = (req, res, next) => {
    Student.findOne({_id: req.params.id})
           .then((student) => res.status(200).json(student))
           .catch((error) =>  console.log({error}))  
}

exports.getAllStudents = (req, res, next) => {
    Student.find()
           .then((students) => res.status(200).json(students))
           .catch((error) =>  console.log({error}))  
}


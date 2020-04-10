const express = require('express')
const router = express.Router()
const studentCtrl = require('../controllers/student')
router.post('/', studentCtrl.createStudent)
router.put('/:id', studentCtrl.updateStudent)
router.delete('/:id', studentCtrl.deleteStudent)
router.get('/:id', studentCtrl.getStudent)
router.get('/', studentCtrl.getAllStudents)

module.exports = router

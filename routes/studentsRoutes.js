var express = require('express');
var router = express.Router();
var studentsController = require('../controller/studentsController')
/* GET home page. */
router.route('/')
    .get((req, res) => studentsController.getStudents(req, res))
    .delete((req, res) => studentsController.deleteStudents(req,res))
    .post((req, res) => studentsController.createStudent(req, res))
    .put((req, res) => studentsController.updateMany(req, res))

router.route('/grades')
  .get((req, res) => studentsController.getGrades(req, res))

router.route('/:id')
  .get((req, res) => studentsController.getStudentById(req, res))
  .put((req, res) => studentsController.updateStudent(req, res))
  .delete((req, res) => studentsController.deleteStudent(req, res))

module.exports = router;

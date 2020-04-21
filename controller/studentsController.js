const studentsService = require('../services/students')

module.exports = {
  getStudents(req, res){
    studentsService.getStudents().then(students => {
      res.json(students)
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  deleteStudents(req, res){
    studentsService.deleteStudents().then(() => {
      res.json({})
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  createStudent(req, res){
    studentsService.createStudent(req.body).then(student => {
      res.json({student: student})
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  getStudentById(req, res){
    studentsService.getStudentById(req.params.id).then(student => {
      res.json(student)
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  updateStudent(req, res){
    studentsService.updateStudent(req.params.id, req.body).then(student => {
      res.json(student)
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  deleteStudent(req, res){
    studentsService.deleteStudent(req.params.id).then(() => {
      res.json({})
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  getGrades(req, res){
    studentsService.grades().then(result => {
      res.json({result: result})
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  updateMany(req, res){
    studentsService.updateMany(req.body.filter, req.body.set).then(result => {
      res.json({result: result})
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  }
}

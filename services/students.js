module.exports = {
  getStudents(){
    return db.Student.find({})
  },
  getStudentById(id){
    return db.Student.findOne({id})
  },
  deleteStudent(id){
    return db.Student.findOneAndRemove({id: id})
  },
  updateStudent(id, body){
    return db.Student.findOneAndUpdate({id: id}, {"$set":body}, {new: true, useFindAndModify: false})
  },
  updateMany(filter, body){
    return db.Student.updateMany(filter, {"$set": body})
  },
  deleteStudents(){
    return db.Student.remove()
  },
  createStudent(body){
    return new db.Student({
      id: body.id,
      documentType: body.documentType,
      name: body.name,
      lastName: body.lastName,
      grades: body.grades
    }).save()
  },
  grades(){
    return this.getStudents().then(students => {
      const numberOfStudents = students.length
      const sum = students.reduce((total, current)=>{
        return total + current.grades.reduce((total, current) => total + current)/current.grades.length
      }, 0)
      return sum/numberOfStudents
    })
  }
}
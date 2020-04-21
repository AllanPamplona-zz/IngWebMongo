module.exports = function(mongoose){
  var Schema = mongoose.Schema;
  var StudentSchema = new Schema({
    documentType: {
        type: String,
        required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    grades: [{type: Number}]
  });
  return mongoose.model("Student", StudentSchema);
}
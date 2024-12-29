const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  semester: { type: String, required: true },
  department: { type: String, required: true },
});

module.exports = mongoose.model('Subject', SubjectSchema);

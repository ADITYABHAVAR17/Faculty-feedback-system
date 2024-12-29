const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comments: { type: String },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);

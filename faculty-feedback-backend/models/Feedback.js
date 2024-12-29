const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Each question's response will be stored as a separate field
  contentDelivery: { type: String, required: true },
  studentEngagement: { type: String, required: true },
  clarityAndStructure: { type: String, required: true },
  resourceAvailability: { type: String, required: true },
  classroomEnvironment: { type: String, required: true },
  assessmentAndFeedback: { type: String, required: true },
  technologyAndTools: { type: String, required: true },
  supportAndCollaboration: { type: String, required: true },
  skillDevelopment: { type: String, required: true },
  generalFeedback: { type: String, required: true },

  // Timestamp to track when feedback was submitted
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);

const Feedback = require('../models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { subject_id, student_id, rating, comments } = req.body;
    const feedback = new Feedback({ subject_id, student_id, rating, comments });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('subject_id student_id');
    res.json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

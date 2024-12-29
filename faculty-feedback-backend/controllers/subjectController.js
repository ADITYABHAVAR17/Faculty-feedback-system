const Subject = require('../models/Subject');

// Create a new subject
exports.createSubject = async (req, res) => {
  try {
    const { name, teacher_id, semester, department } = req.body;
    const subject = new Subject({ name, teacher_id, semester, department });
    await subject.save();
    res.status(201).json({ message: 'Subject created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate('teacher_id');
    res.json(subjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

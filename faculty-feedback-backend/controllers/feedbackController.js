const Feedback = require('../models/Feedback'); // Import Feedback model

// Controller to submit feedback
const submitFeedback = async (req, res) => {
  const { studentId, subjectId, contentDelivery, studentEngagement, clarityAndStructure, resourceAvailability, classroomEnvironment, assessmentAndFeedback, technologyAndTools, supportAndCollaboration, skillDevelopment, generalFeedback } = req.body;

  try {
    const newFeedback = new Feedback({
      student_id: studentId,
      subject_id: subjectId,
      contentDelivery,
      studentEngagement,
      clarityAndStructure,
      resourceAvailability,
      classroomEnvironment,
      assessmentAndFeedback,
      technologyAndTools,
      supportAndCollaboration,
      skillDevelopment,
      generalFeedback
    });

    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};
const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find(); // Fetch all feedback from the database
    res.status(200).json(feedback); // Send the feedback as JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback", error }); // Handle errors
  }
};
// Export the controller function
module.exports = { submitFeedback, getAllFeedback };

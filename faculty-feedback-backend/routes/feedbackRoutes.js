const express = require('express');
const { submitFeedback, getAllFeedback } = require('../controllers/feedbackController');
const router = express.Router();

router.post('/', submitFeedback);  // Submit feedback
router.get('/', getAllFeedback);   // Get all feedback

module.exports = router;

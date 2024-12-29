const express = require('express');
const { createSubject, getAllSubjects } = require('../controllers/subjectController');
const router = express.Router();

router.post('/', createSubject);  // Create subject
router.get('/', getAllSubjects); // Get all subjects

module.exports = router;

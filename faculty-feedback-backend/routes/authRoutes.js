// const express = require('express');
// const { register, login } = require('../controllers/authController');
// const router = express.Router();

// router.post('/register', register); // Register
// router.post('/login', login);       // Login

// module.exports = router;

const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register); // Register
router.post('/login', login);       // Login

// Testing protected routes
router.get('/teacher', protect, authorize('teacher'), (req, res) => {
  res.status(200).json({ message: 'Welcome, teacher!' });
});

router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome, admin!' });
});

module.exports = router;

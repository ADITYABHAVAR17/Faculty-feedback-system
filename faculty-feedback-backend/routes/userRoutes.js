// // const express = require('express');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const User = require('../models/User'); // Make sure your User model is correct
// // const router = express.Router();

// // // Register route
// // router.post('/register', async (req, res) => {
// //   try {
// //     const { name, email, password, role } = req.body;

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     // Hash password
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     // Create new user
// //     const user = new User({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       role,
// //     });

// //     await user.save();
// //     res.status(201).json({ message: 'User registered successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error });
// //   }
// // });

// // // Login route
// // router.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     // Find user by email
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     // Compare passwords
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     // Generate JWT
// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: '1h' }
// //     );

// //     res.status(200).json({
// //       message: 'Login successful',
// //       token,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         role: user.role,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error });
// //   }
// // });

// // module.exports = router;




// const express = require('express');
// const { register, login } = require('../controllers/authController');

// const router = express.Router();

// // Register Route
// router.post('/register', register);

// // Login Route
// router.post('/login', login);

// module.exports = router;


const express = require('express');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Protected routes for user management
router.get('/students', protect, authorize('admin'), async (req, res) => {
  // Logic to fetch students
  res.json({ message: 'Fetching students list (admin access only).' });
});

router.get('/teachers', protect, authorize('admin'), async (req, res) => {
  // Logic to fetch teachers
  res.json({ message: 'Fetching teachers list (admin access only).' });
});

module.exports = router;

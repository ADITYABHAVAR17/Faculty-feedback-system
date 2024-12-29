const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());

// Routes

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', userRoutes);
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/subjects', require('./routes/subjectRoutes'));

// Start server
console.log(process.env)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

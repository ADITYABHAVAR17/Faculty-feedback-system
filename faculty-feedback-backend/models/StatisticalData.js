const mongoose = require('mongoose');

const StatisticalDataSchema = new mongoose.Schema({
  feedback_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Feedback', required: true },
  rating_average: { type: Number },
  comments_analysis: { type: String },
});

module.exports = mongoose.model('StatisticalData', StatisticalDataSchema);

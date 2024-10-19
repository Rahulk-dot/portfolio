const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate:{
    type: Date,
  },
  degree:{
    type: String,
  },
  schoolAddress:{
    type: String,
  },
  description:{
    type: String,
  }
});

module.exports = mongoose.model('Education', EducationSchema);
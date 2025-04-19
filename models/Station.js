const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sessions: { type: Number, required: true },
  energy: { type: Number, required: true },
  revenue: { type: Number, required: true },
});

module.exports = mongoose.model('Station', stationSchema);

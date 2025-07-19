const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  alreadyUsed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Theme', themeSchema);

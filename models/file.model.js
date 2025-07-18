const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  size: String,
  path: String,
  uploadedAt: { type: Date, default: Date.now },
});

const File = mongoose.model('File', fileSchema);
module.exports = File;

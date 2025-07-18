const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const File = require('../models/file.model')

const router = express.Router();

const UPLOAD_DIR = path.join(__dirname, '../../uploads');
const METADATA_FILE = path.join(UPLOAD_DIR, 'files.json');

// Create uploads folder if not exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Load or initialize metadata
let fileList = [];
if (fs.existsSync(METADATA_FILE)) {
  fileList = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'));
}

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// POST: Upload file
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    const fileInfo = new File({
      name: req.body.name || file.originalname,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      path: file.path,
    });

    await fileInfo.save(); // ✅ Save to MongoDB

    res.status(200).json({ message: 'File uploaded successfully', fileInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed' });
  }
});

// GET: Return recent files
router.get('/', async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 }).limit(10);
    res.status(200).json({ files });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Could not fetch files' });
  }
});

module.exports = router;

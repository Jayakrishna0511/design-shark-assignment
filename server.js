const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const uploadRoutes = require('./router/upload.routes');
const authRoutes = require('./router/auth.routes.js');
const { connectDB } = require('./config/db.js');

dotenv.config();

const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Connect to DB
connectDB();

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("im working");
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

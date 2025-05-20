
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', reviewRoutes);

app.listen(5001, () => console.log('Server running on port 5001'));

const express = require('express');
const app = express();

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Body Parser
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api', require('./routes/students'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
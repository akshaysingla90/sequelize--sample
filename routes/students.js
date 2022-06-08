const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models/Student');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Add a Student
router.post('/add', (req, res) => {
    // Insert into table
    Student.create(req.body)
      .then(student => res.status(200).json({msg:'ok'}))
      .catch(err => res.status(400).json({msg:'bad request'}))
});

// Search for student with its id
router.get('/students/:id', (req, res) => {
  let studentId = req.params.id;
  Student.findOne({ where: { id: studentId } } )
  .then(student => res.status(200).json({msg:'ok', data: student}))
  .catch(err => res.status(400).json({msg:'bad request'}))
});

// Search for students with pagination
router.get('/students', (req, res) => {
  let { resultStatus, skip = 0, limit = 10 } = req.query;
  Student.findAll({ 
    attributes: ['id', [sequelize.literal('"mark1"+"mark2"+"mark3"'), 'sumofcol1andcol2']] ,
    offset: offset, limit: limit
  })
    .then(students => res.render('gigs', { gigs }))
    .catch(err => res.render('error', {error: err}));
});

module.exports = router;
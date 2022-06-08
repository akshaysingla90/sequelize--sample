const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = db.define('students', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.NUMBER
  },
  mark1: {
    type: Sequelize.NUMBER
  },
  mark2: {
    type: Sequelize.NUMBER
  },
  mark3: {
    type: Sequelize.NUMBER
  },
});

Student.sync().then(() => {
  console.log('table created');
});
module.exports = Student;
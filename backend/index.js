const express = require('express');
const mongoose = require('mongoose');
const studentModel = require('../backend/src/student/studentModel')

const app = express();
mongoose.connect('mongodb://localhost:27017/crud', {
    dbName: 'user'
})

app.get('/students', async (req, res) => {
    const students = await studentModel.find();
    res.send(students)
})
console.log('Database connected successfully');
app.listen(3000);
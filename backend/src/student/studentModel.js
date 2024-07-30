const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        "name": {
            type: String
        },
        "hobbies": {
            type: [
                {
                    "title": {
                        type: String
                    },
                    "frequency": {
                        type: String
                    }
                }]
        },
        "phone": {
            type: Number
        }
    }
)

const studentModel = mongoose.model('users', studentSchema)

module.exports = studentModel;
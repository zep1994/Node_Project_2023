const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    employeeId: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }
})

module.exports = mongoose.model('User', UserSchema)
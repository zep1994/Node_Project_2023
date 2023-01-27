import mongoose from "mongoose";

const Schema = mongoose.Schema

const employeeShcema = new Schema({
    title: {
        type: String,
        required: true
    },
    // description: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.Model("Employee", employeeShcema)


// const employees = []

// module.exports = class Employee {
//     constructor(x) {
//         this.title = x
//     }

//     save() {
//         employees.push(this)
//     }

//     static fetchAll() {
//         return employees
//     }
// }
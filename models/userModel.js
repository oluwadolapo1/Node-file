const mongoose = require("mongoose")
const userSchema = require("../schemas/userSchema");

const users = mongoose.model('user', userSchema)

module.exports = users
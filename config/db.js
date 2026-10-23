const mongoose = require("mongoose")
// mongoose will connect node js with mongodb and it also provides some efficient method to apply validations

require("dotenv").config()

const connection = mongoose.connect(process.env.MONGO_URI)

module.exports=(connection)

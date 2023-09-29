const mongoose = require("mongoose")
const { Schema } = mongoose

const groupSchema = new Schema({
	name: String,
	desc: String
})

module.exports = mongoose.model("groups", groupSchema)

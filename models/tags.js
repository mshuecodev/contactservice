const mongoose = require("mongoose")
const { Schema } = mongoose

const tagSchema = new Schema({
	name: String,
	desc: String
})

module.exports = mongoose.model("tags", tagSchema)

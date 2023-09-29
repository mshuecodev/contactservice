const mongoose = require("mongoose")
const { Schema } = mongoose

const contactSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		phoneNumber: String,
		email: String,
		address: String,
		dateofbirth: Date,
		gender: String,
		company: String,
		facebook: String,
		instagram: String,
		skype: String,
		linkedin: String,
		img: ["String"],
		notes: String,
		tags: Array
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("contacts", contactSchema)

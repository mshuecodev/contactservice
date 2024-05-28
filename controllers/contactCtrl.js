const contactModel = require("../models/contacts")

exports.get = async function (req, res, next) {
	try {
		const result = await contactModel.find({})
		res.json(result)
	} catch (error) {
		next(error)
	}
}

exports.getDetail = async function (req, res, next) {
	let { _id } = req.params
	try {
		const result = await contactModel.findById(_id)
		res.json(result)
	} catch (error) {
		next(error)
	}
}

exports.create = async function (req, res, next) {
	var new_data = new contactModel(req.body)

	try {
		let result = await new_data.save()
		res.json(result)
	} catch (error) {
		next(error)
	}
}

exports.update = async function (req, res, next) {
	try {
		let result = await contactModel.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
		res.json(result)
	} catch (error) {
		next(error)
	}
}

exports.delete = async function (req, res, next) {
	try {
		let result = await contactModel.findByIdAndDelete({
			_id: req.params._id
		})
		res.json({ message: "successfully deleted", result: result })
	} catch (error) {
		next(error)
	}
}

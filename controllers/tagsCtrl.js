const tagsModel = require("../models/tags")

exports.get = function (req, res, next) {
	tagsModel
		.find()
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			next(err)
		})
}

exports.create = function (req, res, next) {
	var new_data = new tagsModel(req.body)

	new_data.save(function (err, result) {
		if (err) {
			next(err)
		} else {
			res.json(result)
		}
	})
}

exports.update = function (req, res, next) {
	let { _id } = req.params
	tagsModel.findOneAndUpdate({ _id }, req.body, { new: true }, function (err, result) {
		if (err) {
			next(err)
		} else {
			res.json(result)
		}
	})
}

exports.delete = function (req, res, next) {
	let { _id } = req.params
	tagsModel.remove({ _id }, function (err, resut) {
		if (err) {
		} else {
			res.json({ message: "Successfully deleted!", result })
		}
	})
}

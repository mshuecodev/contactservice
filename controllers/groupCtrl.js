const groupModel = require("../models/groups")

exports.get = function (req, res, next) {
	groupModel
		.find()
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			next(err)
		})
}

exports.create = function (req, res, next) {
	var new_data = new groupModel(req.body)

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
	groupModel.findOneAndUpdate({ _id }, req.body, { new: true }, function (err, result) {
		if (err) {
			next(err)
		} else {
			res.json(result)
		}
	})
}

exports.delete = function (req, res, next) {
	let { _id } = req.params
	groupModel.remove({ _id }, function (err, resut) {
		if (err) {
		} else {
			res.json({ message: "Successfully deleted!", result })
		}
	})
}

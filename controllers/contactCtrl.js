const contactModel = require("../models/contacts")

exports.get = function (req, res, next) {
	contactModel
		.find()
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			next(err)
		})
}

exports.create = function (req, res, next) {
	var new_data = new contactModel(req.body)

	new_data.save(function (err, result) {
		if (err) {
			next(err)
		} else {
			res.json(result)
		}
	})
}

exports.update = function (req, res, next) {
	contactModel.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, function (err, result) {
		if (err) {
			next(err)
		} else {
			res.json(result)
		}
	})
}

exports.delete = function (req, res, next) {
	contactModel.remove(
		{
			_id: req.params._id
		},
		function (err, result) {
			if (err) {
				next(err)
			} else {
				res.json({ message: "successfully deleted", result: result })
			}
		}
	)
}

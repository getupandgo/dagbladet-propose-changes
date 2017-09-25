const Edit = require('../models/edit')

exports.get = function (req, res, next) {
  Edit
    .find({ isApproved: false })
    .then(edits => res.json(edits))
    .catch(next)
}

exports.saveEdit = function (req, res, next) {
  const editedPart = new Edit(req.body)

  editedPart
    .save()
    .then(() => res.sendStatus(200))
    .catch(next)
}

exports.delete = function (req, res, next) {
  const editId = req.params.id

  Edit.findByIdAndRemove(editId)
    .exec()
    .then(() => res.sendStatus(200))
    .catch(next)
}

exports.approve = function (req, res, next) {
  const editId = req.params.id

  Edit.findByIdAndUpdate(editId, { isApproved: true })
    .exec()
    .then(() => res.sendStatus(200))
    .catch(next)
}

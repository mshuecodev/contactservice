const express = require("express")
const router = express.Router()
const groupCtrl = require("../controllers/groupCtrl")

router.get("/", groupCtrl.get)
router.post("/", groupCtrl.create)
router.put("/:_id", groupCtrl.update)
router.delete("/:_id", groupCtrl.delete)

module.exports = router

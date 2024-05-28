const express = require("express")
const router = express.Router()
const contactCtrl = require("../controllers/contactCtrl")

router.get("/", contactCtrl.get)
router.get("/:_id", contactCtrl.getDetail)
router.post("/", contactCtrl.create)
router.put("/:_id", contactCtrl.update)
router.delete("/:_id", contactCtrl.delete)

module.exports = router

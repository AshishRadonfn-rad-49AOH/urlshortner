const express = require('express')
const router = express.Router()
const urlCtrl = require("../controllers/urlController")

router.post("/url/shorten",urlCtrl.createShortenURL)
router.get("/:urlCode",urlCtrl.getUrlByUrlCode)



module.exports = router;
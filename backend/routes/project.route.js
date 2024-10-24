const express = require('express')
const router = express.Router()
const login  = require('../controllers/project.controller');

router.post("/login", login)


module.exports = router
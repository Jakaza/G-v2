const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const login  = require('../controllers/auth.controller');

router.post("/login", login)


module.exports = router
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.post("/login", async (req, res) =>{
    const {email , password} = req.body;

    const user = await User.findOne({email: email});

    try {

    if (!user) return res.status(400).json({ status: false, message: "Invalid Credentials!" });

    const match = await bcrypt.compare(password, user.password);

    if(!match) return res.status(400).json({ status: false, message: "Invalid Credentials!" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
        {
          id: user.id,
          isAdmin: false,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: age }
      );

      const {password: userPassword, ...userInfo} = user;

      res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
})


module.exports = router
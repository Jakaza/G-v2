const express = require('express')
const router = express.Router()


router.get("/testing", (req , res)=>{
    res.json({message: "Route Is Working"})
})






module.exports = router
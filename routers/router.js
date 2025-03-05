const express=require("express")
const router=express.Router()

const controldata=require("../controllers/registration_control.js")

router.post("/reg",controldata.registereddata)
router.post("/log",controldata.loginuserdata)

module.exports=router 

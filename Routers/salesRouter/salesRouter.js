const express=require("express")
const router=express.Router()
const {getYearlySales,setMonthTarget,addExpense}= require("../../Controllers/salesController/salesController")
router.get("/sales",getYearlySales)
router.post("/setMonthlyTarget",setMonthTarget)
router.post("/setExpe",addExpense)


module.exports = router;
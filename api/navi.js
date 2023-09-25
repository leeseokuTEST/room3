const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{res.send("navi.js입니다. ")})
router.get("/sub",(req,res)=>{res.send("하위 라우터에요. 하이! 주소창에서 요청 해야 해요이아~ 부모 라우터/sub")})

module.exports = router ;
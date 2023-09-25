const app = require("express")();
// const express = require("expres");
// const app = expree();

const navi = require("./api/navi");
const banner = require("./api/banner");
const interview = require("./api/interview");

//여기 주소 세팅한 거임. use("주소", 변수)
app.use("/", banner);

app.use("/interview", interview);

app.use("/navi", navi)



app.use((req,res)=>{res.status(404).sendFile(__dirname+"/public/nopage.html")})




app.listen(8000, ()=>{console.log("서버정상구동중")})


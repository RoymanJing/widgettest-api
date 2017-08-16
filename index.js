var express = require("express");
var app = express();
var router = express.Router();
  
var path = process.cwd() + "/views/";

app.use(express.static('public'))
app.use("/",router);
  
router.get("/widget/header",function(req, res){
  console.log(req.url)
  res.sendFile(path + "header.html");
});
router.get("/widget/footer",function(req, res){
  console.log(req.url)
  res.sendFile(path + "footer.html");
});
router.get("/widget/center",function(req, res){
  console.log(req.url)
  res.sendFile(path + "center.html");
});
router.get("/widget/leftsider",function(req, res){
  console.log(req.url)
  res.sendFile(path + "leftsider.html");
});
router.get("/widget/rightsider",function(req, res){
  console.log(req.url)
  res.sendFile(path + "rightsider.html");
});
  
app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});
  
app.listen(3001,function(){
  console.log("Server running at Port 3001");
});
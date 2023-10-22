var express = require("express");
var router = express.Router();
const { json } = require("body-parser");
const path = require("path");

//      import controller :
const userController = require('../controllers/user_controller')

//      log time : (invoke in each route call !)
var date = "";

router.use(function timeLog(req, res, next) {
  var today = new Date();
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log("Time: ", date.toString());
  next();
});



//      user show route 
router.get("/:id" , (req , res) => {
    const userId = req.params.id;  
    
    //      use without callback : 
    let dbResponse = userController.userController.getUserById(userId)

    //      manage route response 
    if(userId != null) {
        res.send(JSON.stringify(dbResponse))
    } else {
        res.status(404).send("user dose not found !")
    }
})


module.exports = router;
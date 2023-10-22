var express = require("express");
var router = express.Router();
const { json } = require("body-parser");
const path = require("path");

//      import controller :
const tiketController = require('../controllers/tiket_controller.js');
const { error } = require("console");

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
router.post("/addnew", async (req, res) => {
    try {
        if (req.body) {
            const reqTextContent = JSON.stringify(req.body.requestText)
            await tiketController.tiketController.writeTiket(reqTextContent)
            .then(() => {
                res.end()
            })

        }else {throw error}

    } catch (error) {

        res.status(404).send("user dose not found !")
        console.error('user dose not found !', error);
        // Handle the error here (e.g., show an error message)
        return null;
    }

})


module.exports = router;
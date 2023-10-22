const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


//      import routes : 
var userRouter = require("./routes/user_routes.js");
var tiketRouter = require("./routes/tiket_routes.js")

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (start point to locate files)
app.use(express.static('public'));

// app use modules for serving js file.
app.use('/js', express.static(path.join(__dirname, '..', 'frontend', 'js')));

// app use component to render page dynamic.
app.use('/components', express.static(path.join(__dirname, '..', 'frontend', 'components')));

//      app fonts
app.use('/fonts', express.static(path.join(__dirname, '..', 'frontend', 'public', 'fonts')));


// Serve static files from the 'style' directory
app.use('/styles', express.static(path.join(__dirname, '..', 'frontend', 'css')));


// Handle routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'views', 'main.html'));
});


//      use user route : 
app.use("/user", userRouter);
app.use("/tiket" , tiketRouter)

// Start server
const port = 3000;
app.listen(port, function () {
    console.log(`App listening on port ${port}`);
});
// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send('Internal Server Error');
});


// Handle 404 errors
app.use(function (req, res) {
    res.status(404).send('Not Found');
});
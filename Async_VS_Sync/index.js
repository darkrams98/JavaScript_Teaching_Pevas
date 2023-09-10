const express = require('express'); 
const app = express();
const path = require('path');
const fs = require('fs');

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// app use modules for serving js file.
app.use('/modules', express.static('modules'));

// Serve static files from the 'style' directory
app.use('/styles', express.static(path.join(__dirname, 'styles')));


// Handle routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pages/main.html');
});




// Define a GET route to return all objects
app.get('/showdata', function (req, res) {
    // This will parse the JSON file into a JavaScript object that you can then access.
    const data = fs.readFileSync('Example_Data.json');
    const objects = JSON.parse(data);
    res.json(objects);
});

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
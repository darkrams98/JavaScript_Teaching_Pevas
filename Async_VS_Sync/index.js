const express = require('express');

const app = express();

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Handle routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pages/main.html');

});

const fs = require('fs');



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
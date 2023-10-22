
//      import modules 
const fs = require('fs');
const path = require('path');

//      read file path to search in users


const tiketController = {
    // Write a text file with the provided text
    writeTiket: async function (text) {
        // Define the file path where you want to save the text file
        const filePath = path.join(__dirname, '..' , 'logs', 'user_tikets.txt'); // Update the directory and filename as needed

        // Use the fs.writeFile function to write the text to the file
        await fs.writeFile(filePath, text, (err) => {
            if (err) {
                console.error('Error writing the text file:', err);
            } else {
                console.log('Text file has been successfully written.');
            }
        });
    },
};

module.exports = {
    tiketController
};

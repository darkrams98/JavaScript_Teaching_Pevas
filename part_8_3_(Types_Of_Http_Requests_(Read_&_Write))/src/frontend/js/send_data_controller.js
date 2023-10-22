var sendData = {
    sendNewTiket: function (requestText) {
        // Define the URL where you want to send the data
        const url = '/tiket/addnew'; // Replace with the actual endpoint

        // Create a POST request
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ requestText }), // Send the textarea content as JSON data
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Request sent successfully.');
                    // Handle success, if needed
                } else {
                    console.error('Error sending request.');
                    // Handle errors, if needed
                }
            })
            .catch((error) => {
                console.error('Error sending request:', error);
                // Handle errors, if needed
            });
    },
};

export { sendData };

const request = require('request');
const fs = require('fs');
// const content = body;
const addressInput = process.argv[2];
const whereToWrite = process.argv[3];

//Set up process.argv
// Input from process should then be the request (below) and where to save it (writeFile)

console.log(addressInput);
request(addressInput, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(whereToWrite, body, err => {
    if (err) {
      console.error(err);
    }
    if (body) {
      console.log(`Downloaded and saved ${body.length} bytes to ${whereToWrite}`)
    }
    // file written successfully
  });
});








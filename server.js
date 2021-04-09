//require express, body-parser, and cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//start instance
const app = express();

//app to use cors for cross origin allowance
app.use(cors());

//use body-parser

//create server
const port = 8000;

const server = app.listen(port, listening);

//helper functions
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}
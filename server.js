//js object for API endpoint
projectData = {};

//require express, body-parser, and cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//start instance
const app = express();

//app to use cors for cross origin allowance
app.use(cors());

//use body-parser (updated per https://knowledge.udacity.com/questions/509946 mentor response)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('website'));

//create server
const port = 8000;

const server = app.listen(port, listening);

//GET
app.get('', sendData);

//POST
app.post('/addEntry', addJournalData);

//helper functions
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

function sendData(req, res) {
    res.send(projectData);
}

function addJournalData(req, res) {
    console.log('req: ', req);
    console.log('res: ', res);
    newJournalItem = {
        temp: req.body.temperature,
        date: req.body.date,
        userNote: req.body.userResponse
    }

    projectData.push(newJournalItem);
    console.log(projectData);
}
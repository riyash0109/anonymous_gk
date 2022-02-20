const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("stadium.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const stadium = JSON.parse(data);

    console.log(stadium); // Print users
});



var newFlightDetails = {
    "name":"super league",
    "event_date":"12-2-2022",
    "category":"cricket match",
    "stadium_name":"chinnaswamy stadium ",
    "location":"bengaluru",
    "organiser":"TATA Group",
    "event_time":"20:00 hrs"


}



fs.writeFile("newflight4.json", JSON.stringify(newFlightDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})
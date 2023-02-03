// // Setup empty JS object to act as endpoint for all routes
let projectData = {};


// // Require Express to run server and routes
const express = require('express');

// // Start up an instance of app
const app = express();
const cors = require('cors');


// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Cors for cross origin allowance
app.use(cors());
// // Initialize the main project folder
app.use(express.static('index.html'));


// // Setup Server
const port = process.env.PORT || 3000;
;

function listening(){
    console.log('server running');
    console.log('running on local host:'+ port);
}

class Dataa {
  data;
  getData = () => this.data
  setData = (data) => {
    this.data = data
  }
}

const dataa = new Dataa()

app.post('/postData',(req,res) =>{
  dataa.setData(req.body)
  res.send(projectData);
})
app.get('/getData', (req, res) => {
  projectData = dataa.getData();
  res.send(projectData);
})
const server = app.listen(port,listening);
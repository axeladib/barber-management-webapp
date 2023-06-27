const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

//TODO: Parse request of content-type : json application
app.use(bodyParser.json());

//TODO: Parse request of content-type : x-www-form-urlencoded application
app.use(bodyParser.urlencoded({extended:true}));

//TODO: Simple route
app.get("/", (request, response)=>{
    response.json({message: "Simple setup complete"})
});

app.post("/login",(request, response)=>{
    // Process the data from request.body
    // Perform actions like saving data to the databased 
    // Send back a response using res.send() or res.json()
})


//TODO: Set port, listen to request

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("app/models");
const Role = db.role;

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};
//help communication between the React App and the Express server.
app.use(cors(corsOptions));

//TODO: Parse request of content-type : json application
app.use(bodyParser.json());

//TODO: Parse request of content-type : x-www-form-urlencoded application
app.use(bodyParser.urlencoded({ extended: true }));

//TODO: Simple route
app.get("/", (request, response) => {
  response.json({ message: "Server setup complete at 8080 port" });
});

app.post("/signup", (request, response) => {
  // Process the data from request.body
  // Perform actions like saving data to the databased
  // Send back a response using res.send() or res.json()
  const { username, email, phone, password } = request.body;
  //Validate the data received then store in the database
  console.log(username, email, phone, password);
});

//TODO: Initialise the Sequelize model

db.sequelize.sync(
  { force: true }.then(() => {
    console.log("Drop and Resync Database");
    initial();
  })
);
const initial = () => {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 1,
    name: "moderator",
  });

  Role.create({
    id: 1,
    name: "admin",
  });
};
//Overall, this code sets up an Express application, 
//synchronizes the database schema, and creates initial roles using Sequelize. 
//It provides a way to initialize the database with predefined roles, ensuring 
//they are available for use in the application.

//TODO: Set port, listen to request

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

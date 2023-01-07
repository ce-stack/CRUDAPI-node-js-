const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
//connect
const password = "aFvC4vLi847tBDLU";


mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb://databasePost:${password}@ac-lseapw2-shard-00-00.eoio9xf.mongodb.net:27017,ac-lseapw2-shard-00-01.eoio9xf.mongodb.net:27017,ac-lseapw2-shard-00-02.eoio9xf.mongodb.net:27017/?ssl=true&replicaSet=atlas-1t8eyl-shard-0&authSource=admin&retryWrites=true&w=majority`
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD posts application." });
});

require("./app/routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
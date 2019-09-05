const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    return Recipe.deleteMany();
  })
  .then(result => {
    return Recipe.insertMany(data);
  })
  .then(result => {
    console.log("Success", result);

    return mongoose.connection.close();
  })
  .then(() => console.log("conn closed"))

  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

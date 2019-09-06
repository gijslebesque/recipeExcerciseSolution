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
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },

      {
        duration: 100
      },
      {
        new: true
      }
    );
  })
  .then(updatedDoc => {
    console.log("Updated doc", updatedDoc);
    return Recipe.findOneAndDelete({ title: "Carrot Cake" });
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .then(() => console.log("conn closed"))

  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

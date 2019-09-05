const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    // TODO: write the schema
    title: String,
    level: String,
    ingredients: Array,
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: String
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;

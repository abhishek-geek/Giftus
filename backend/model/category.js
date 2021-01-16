const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Category = mongoose.model("categories", categorySchema);

function validateCategory(category) {
  console.log(category);
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(category);
}

module.exports.Category = Category;
module.exports.validate = validateCategory;

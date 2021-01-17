const { Category, validate } = require("../model/category");

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/", async (req, res) => {
  const category = await Category.find();
  if (!category) return res.status(404).send("Product not found");
  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.find({ _id: req.params.id });
  if (!category) return res.status(404).send("Product not found");
  res.send(category);
});

router.post("/", jsonParser, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let category = new Category({
    name: req.body.name,
  });
  category = await category.save();

  res.send(category);
});

router.put("/:id", jsonParser, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );

  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);

  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
});

module.exports = router;

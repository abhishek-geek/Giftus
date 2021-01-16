const { Gift, validate } = require("../model/gift");

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/", async (req, res) => {
  const gift = await Gift.find();
  if (!gift) return res.status(404).send("Product not found");
  res.send(gift);
});

router.get("/:id", async (req, res) => {
  const gift = await Gift.find({ _id: req.params.id });
  if (!gift) return res.status(404).send("Product not found");
  res.send(gift);
});

router.post("/", jsonParser, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let gift = new Gift({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    link: req.body.link,
  });
  gift = await gift.save();

  res.send(gift);
});

router.put("/:id", jsonParser, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const gift = await Gift.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      category: req.params.category,
      link: req.params.link,
    },
    {
      new: true,
    }
  );

  if (!gift)
    return res.status(404).send("The gift with the given ID was not found.");

  res.send(gift);
});

router.delete("/:id", async (req, res) => {
  const gift = await Gift.findByIdAndRemove(req.params.id);

  if (!gift)
    return res.status(404).send("The gift with the given ID was not found.");

  res.send(gift);
});

module.exports = router;

const Joi = require("joi");
const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  category: {
    type: Array,
    validate: {
      validator: function (v) {
        const category = [
          "Kid",
          "Men",
          "Women",
          "Friend",
          "Wife",
          "Sister",
          "Girlfriend",
          "Boyfriend",
          "Brother",
          "Father",
          "Mother",
          "Teacher",
          "Student",
          "Boss",
        ];
        let flag = 1;
        v.forEach((e) => {
          const i = category.indexOf(e);
          if (i === -1) {
            flag = 0;
            return false;
          }
        });
        if (flag === 0) return false;
        return true;
      },
    },
  },
  link: String,
  image: String,
});

const Gift = mongoose.model("gifts", giftSchema);

function validateGift(gift) {
  console.log(gift);
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().min(5).required(),
    category: Joi.array().min(1),
    link: Joi.string(),
    image: Joi.string(),
  });

  return schema.validate(gift);
}

module.exports.Gift = Gift;
module.exports.validate = validateGift;

// const gift = new Gift({
//   name: "Kitty: Soft Toy",
//   price: 845,
//   category: ["Kid", "Girlfriend", "Sister"],
//   link:
//     "https://www.amazon.in/Ikea-Polyester-Fibres-Filling-White/dp/B07NW7LV31/ref=sr_1_5?crid=CCMUWS8ZCR3W&dchild=1&keywords=soft+toy+cat&qid=1610630161&sprefix=soft%2Caps%2C373&sr=8-5",
// });

// async function saveGift() {
//   try {
//     const result = await gift.save();
//     console.log(result);
//   } catch (ex) {
//     console.log("aa gye swad", ex);
//   }
// }

// saveGift();

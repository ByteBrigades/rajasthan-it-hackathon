const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const itemModel = new mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    price: { type: String },
    quantity: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemModel);

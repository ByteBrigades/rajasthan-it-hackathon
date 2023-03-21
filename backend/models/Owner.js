const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ownerModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    buyers: [
      {
        type: ObjectId,
        ref: "Customer",
        default: [],
      },
    ],
    products: [
      {
        type: ObjectId,
        ref: "Item",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerModel);

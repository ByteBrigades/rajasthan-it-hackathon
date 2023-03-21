const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    scannedCount: {
      type: Number,
      required: true,
      default: 0,
    },
    lastScannedDate: {
      type: String,
      default: "",
    },
    couponCode: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);

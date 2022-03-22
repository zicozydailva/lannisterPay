const mongoose = require("mongoose");
const Customer = require("./Customer");
const PaymentSchema = require("./PaymentEntity");

const serviceSchema = new mongoose.Schema({
  Amount: {
    type: Number,
    required: [true, "Amount field cannot be empty"],
  },
  Currency: {
    type: String,
    default: "NGN",
  },
  CurrencyCountry: {
    type: String,
    enum: ["LOCL", "INTL"],
    required: [true, "Please choose your transaction locale. LOCL?, INTL? "],
  },
  Customer: [Customer],
  PaymentEntity: [PaymentSchema],
}, {timestamps: true});

module.exports = mongoose.model("Service", serviceSchema);

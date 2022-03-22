const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  EmailAddress: {
    type: String,
    required: [true, "Please provide a valid Email address"],
  },
  FullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  BearsFee: {
    type: Boolean,
    default: true,
    // If Customer.BearsFee is true, ChargeAmount = Transaction Amount + AppliedFeeValue
    // If Customer.BearsFee is false, ChargeAmount = Transaction Amount
  },
});

module.exports = CustomerSchema;


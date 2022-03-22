const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    Issuer: {
        type: String,
        required: [true, "Please provide financial institution. E.g GTBANK, ZENITHBANK, UBA "],
    },
    Brand: {
        type: String,
        required: [true, "Please provide card brand. E.g MASTERCARD, VERVE, VISACARD"],
        enum: ["MASTERCARD", "VERVE", "VISA", "AMEX"]
    },
    Number: {
        type: Number,
        required: "Please provide account Number",
        minlength: 16,
        maxlength: 16,
    },
    SixID: {
        type: Number,
        default: 441122
        // Number.substring(0, 6) -- to get The first six digits of the payment entity number from the client side.
    },
    Type: {
        type: String,
        required: [true, "Please choose card type"],
        enum: ["CREDIT-CARD", "DEBIT-CARD", "BANK-ACCOUNT", "USSD", "WALLET-ID"]
    },
    Country: {
        type: String,
        required: [true, "Please choose your country"],
        enum: ["NG", "US", "GH", "KE"],
        default: "NG"
    }
})

module.exports = PaymentSchema;
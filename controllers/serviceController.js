const Service = require("../models/Service");

const fees = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json(error);
  }
};

const compute = async (req, res) => {
  try {
    const _id = req.params.id;

    const service = await Service.findById(_id).lean();

    if(!service) {
      res.status(404).json("Invalid Credential")
    }

    const { Amount, CurrencyCountry } = service;
    const id = service._id;
    const customerDetails = service.Customer;
    const payDetails = service.PaymentEntity;

    let feeValue;
    //  FEE CONFIGURATION
    let loclCreditCard_Perc = (1.4 / 100) * Amount;
    let intlCreditcardMaster_Perc = (3.8 / 100) * Amount;
    let intlCreditcardOthers_Perc = (5.8 / 100) * Amount;
    let loclUssdMtn_flatPerc = 20 + (0.5 / 100) * Amount;
    let loclUssdOthers_flatPerc = 20 + (0.5 / 100) * Amount;

    if (CurrencyCountry === "LOCL" && payDetails[0].Type === "CREDIT-CARD") {
      feeValue = loclCreditCard_Perc;
    }  else if (
      CurrencyCountry === "INTL" &&
      payDetails[0].Brand === "MASTERCARD"
    ) {
      feeValue = intlCreditcardMaster_Perc;
    }

    if (CurrencyCountry === "LOCL" && payDetails.Type === "USSD") {
      feeValue = intlCreditcardOthers_Perc;
      feeValue = loclUssdMtn_flatPerc;
    }

    if (
      CurrencyCountry === "INTL" &&
      payDetails[0].Type === "CREDIT_CARD" &&
      payDetails[0].Brand !== "MASTERCARD"
    ) {
      feeValue = loclUssdOthers_flatPerc;
    }

    if(payDetails[0].Brand !== "MASTERCARD") {
      feeValue = intlCreditcardOthers_Perc
    }

    if (
      CurrencyCountry !== "LOCL" &&
      payDetails[0].Brand !== "MASTERCARD"
    ) {
      feeValue = intlCreditcardOthers_Perc;
    }

    let AppliedFeeID = id;
    let AppliedFeeValue = Number((feeValue).toFixed(2));
    let ChargeAmount =
      customerDetails.BearsFee === true ? Amount + AppliedFeeValue : Amount;
    let SettlementAmount = ChargeAmount + AppliedFeeValue;

    res
      .status(200)
      .json({ AppliedFeeID, AppliedFeeValue, ChargeAmount, SettlementAmount });
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = { compute, fees };


const fieldAuth = (req, res, next) => {
    const {Amount, Currency, CurrencyCountry, Customer, PaymentEntity} = req.body

    if(Amount < 1) {
      return  res.status(400).json("Amount cannot be a negative value")
    }

    if(Amount == !NaN) {
       return res.status(401).json("Amount cannot contain character, special characters")
    }

    if(!Amount || !Currency || !CurrencyCountry) {
       return res.status(400).json("Amount, Currency and Currency Country fields are required!")
    }

    if(!Customer) {
       return res.status(400).json("Customer Info cannot be empty, Please provide an EmailAddress and FullName")
    }

    if(!PaymentEntity) {
       return res.status(400).json("Payment Entity cannot be empty, Please Provide and Issuer, Brand, Account Number, Type and Country")
    }
    next()
}

const serviceChecker = (req, res, next) => {
   if(!req.params.id) {
    return res.status(404).json("No fee configuration for USD transactions")
   }
   next()
}

module.exports = {fieldAuth, serviceChecker};
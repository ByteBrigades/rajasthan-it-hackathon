const Customers = require("../models/Customer");

const validateCustomer = async (req, res) => {
  try {
    const { phoneNumber, scannedCount, lastScannedDate, couponCode } = req.body;

    if (!phoneNumber) {
      console.log("No phone number given");
      res.status(500).json({ message: "No phone number given" });
      return;
    }
    try {
      const customers = await Customers.findOne({ phoneNumber: phoneNumber });
      if (customers) {
        return res.status(200).json(customers);
      } else {
        const customer = new Customers({
          phoneNumber: phoneNumber,
          couponCode: couponCode,
          scannedCount: scannedCount,
          lastScannedDate: lastScannedDate,
        });

        const newCustomer = await customer.save();

        return res.status(200).json(newCustomer);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getCustomerDetails = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    if (!phoneNumber) {
      console.log("No phone number given");
      res.status(500).json({ message: "No phone number given" });
      return;
    }
    const customer = await Customers.findOne({ phoneNumber: phoneNumber });
    console.log(customer);
    res.status(200).json({ customer: customer });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getAllCustomerDetails = async (req, res) => {
  try {
    const customers = await Customers.find();
    console.log(customers);
    return res.status(200).json(customers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const incrementScannedCount = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    try {
      const customer = await Customers.findOne({ phoneNumber: phoneNumber });
      if (!customer) {
        return res.status(404).json("Customer not found");
      }
      customer.scannedCount += 1;
      await customer.save();
      return res.status(200).json({
        scannedCount: customer.scannedCount,
        phoneNumber: phoneNumber,
        message: "Updated scanned count.",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const couponGenerator = async (req, res) => {
  try {
    const { phoneNumber, couponCode } = req.params;
    const customer = await Customers.findOne({ phoneNumber: phoneNumber });
    if (!customer) {
      return res.status(404).json("Customer not found");
    }
    const { scannedCount } = customer;
    console.log(scannedCount);
    let powerOfTwo = 1;
    while (powerOfTwo < scannedCount) {
      powerOfTwo *= 2;
    }
    if (powerOfTwo === scannedCount) {
      const customer = await Customers.findOneAndUpdate(
        { phoneNumber: phoneNumber },
        {
          $set: {
            couponCode: couponCode,
          },
        }
      );
      // return res.status(200).json({
      //   couponCodes: couponCode,
      //   phoneNumber: phoneNumber,
      // });
    } else {
      console.log("not working");
      return res.status(500).json({ message: "needed credit points" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  validateCustomer,
  getCustomerDetails,
  getAllCustomerDetails,
  incrementScannedCount,
  couponGenerator,
};

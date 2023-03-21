const {
  validateCustomer,
  getCustomerDetails,
  getAllCustomerDetails,
  incrementScannedCount,
  couponGenerator,
} = require("../Controllers/CustomerController");

const router = require("express").Router();

router.post("/", validateCustomer);
router.get("/customer/:phoneNumber", getCustomerDetails);
router.get("/all", getAllCustomerDetails);
router.post("/scanned", incrementScannedCount);
router.get("/couponGenerate/:phoneNumber", couponGenerator);

module.exports = router;

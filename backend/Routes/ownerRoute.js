const { createOwner } = require("../Controllers/OwnerController");

const router = require("express").Router();

router.post("/", createOwner);

module.exports = router;

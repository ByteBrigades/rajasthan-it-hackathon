const Owners = require("../models/Owner");

const createOwner = async (req, res) => {
  try {
    const { username, password } = req.body;
    const owner = await Owners.findOne({ username: username });
    if (owner) {
      return res.status(200).json(owner);
    } else {
      const newOwner = new Owners({
        username: username,
        password: password,
      });
      await newOwner.save();
      return res.status(200).json(newOwner);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    s;
  }
};

module.exports = { createOwner };

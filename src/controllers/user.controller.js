const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const authCrl = {
  authRegister: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing username or password" });
    }
    try {
      // check if the user
      const user = await User.findOne({ username: username });
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "Username already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password,salt);
      const newUser = new User({
        username: username,
        password: hashPassword,
      });
      await newUser.save();
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  authLogin: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing username or password" });
    }
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect Username" });
      }
      const passwordValid = await bcrypt.compare(req.body.password,user.password);
      console.log("s",passwordValid)
      if (!passwordValid) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect Username" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
module.exports = authCrl

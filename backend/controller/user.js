const User = require('../model/user');


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log('body : ', name, email, password)

    if (!name || !email || !password) {
      return res.status(206).json({
        success: false,
        message: "All fields required"
      })
    }

    // check user with this email exist or not:
    let user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    // create new user now and save it in data base:
    user = await User.create({
      name,
      email,
      password,
    });

    const token = await user.generateToken();

    user = await user.toJSON();

    delete user["password"]

    // cookie set with expire date : this cookie expire after 90 days : formula :: days(eg:4)*hours(24)*minutes(60)*second(60)*milliSecond(1000)
    return res
      .status(200)
      .cookie("token", "Bearer " + token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        sameSite: 'none',
        httpOnly: true,
        secure: false
      })
      .json({
        success: true,
        user,
        token,
      });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message, err: err });
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check : user exit with this email or not.  => by  findOne function:
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "your email does not exits:",
      });
    }

    // check password:
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = await user.generateToken();


    user = await user.toJSON();

    delete user["password"]

    // cookie set with expire date : this cookie expire after 90 days : formula :: days(eg:4)*hours(24)*minutes(60)*second(60)*milliSecond(1000)
    return res
      .status(200)
      .cookie("token", "Bearer " + token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        sameSite: 'none',
        httpOnly: true,
        secure: false
      })
      .json({
        success: true,
        user,
        token
      });
  } catch (err) {
    return res.status(500).send({ success: false, message: err.message });
  }
}
const My_profile = async (req, res) => {
  try {
    let user = await User.findById(req.user._id);
    user = await user.toJSON();
    delete user["password"]
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "create your account",
    });
  }
}
const Update_profile = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findById(req.user._id);

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    const token = await user.generateToken();

    await user.save();

    return res.status(200).json({ success: true, token, message: "Profile Updated" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie('token');

    res.status(200).json({ success: true, message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Error' });
  }
}

module.exports = { register, login, My_profile, Update_profile, logout };
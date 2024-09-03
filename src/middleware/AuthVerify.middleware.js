const { DecodeToken } = require("../utility/jwt.utility");

exports.AuthVerify = (req, res, next) => {
  let Token = req.cookies.token;
  try {
    const decoded = DecodeToken(Token);

    req.headers.email = decoded.email;
    req.headers.userID = decoded.userID;
    req.headers.role = decoded.role;

    next();
  } catch (error) {
    res.json({ status: "fail", message: "Check your login access" });
  }
};

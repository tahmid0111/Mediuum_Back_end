const { DecodeToken } = require("../helpers/important/common.helper");

exports.AuthVerify = (req, res, next) => {
  let Token = req.cookies.token;
  try {
    const decoded = DecodeToken(Token); // decoding the provided token in header
    let email = decoded.email;
    let role = decoded.role;

    req.headers.email = email; // setting email in the header from the decoded token
    req.headers.role = role;

    next(); // giving permission to move on
  } catch (error) {
    res.json({ status: "fail", message: "Check your login access" });
  }
}
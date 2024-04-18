exports.VerifyManager = (req) => {
  let role = req.headers.role;
  if (!role === "admin" || !role === "manager") {
    return false;
  }
  return true;
};

exports.VerifyAdmin = (req) => {
  let role = req.headers.role;
  if (!role === "admin") {
    return false;
  }
  return true;
};

// cookies handler
exports.SetCookie = async (res, cookieName = "token", cookieValue) => {
  let cookieOption = {
    expires: new Date(Date.now() + 24 * 60 * 1000),
    httpOnly: false,
  };

  res.cookie(cookieName, cookieValue, cookieOption);
};

exports.RemoveCookie = async (res, cookieName = "token", cookieValue = "") => {
  let cookieOption = {
    expires: new Date(Date.now() - 24 * 6060 * 1000),
    httpOnly: false,
  };

  res.cookie(cookieName, cookieValue, cookieOption);
};

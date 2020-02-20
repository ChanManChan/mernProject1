const jwt = require('jsonwebtoken');
const config = require('config');

// implement this into a protected route
module.exports = function(req, res, next) {
  // Get token from header
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  // const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  // Verify token
  try {
    /*
      DECODED
      {
        "user": {
          "id": "5e4e5e7864b36a05c17df60c"
        },
        "iat": 1582194297,
        "exp": 1582554297
      }
    */
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // we can use this req.user in any of our protected routes and we could for instance, get the users profile.
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

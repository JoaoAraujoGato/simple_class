const jwt = require("jsonwebtoken");

module.exports = {
  async authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const [scheme, token] = authHeader
      ? authHeader.split(" ")
      : [undefined, undefined];

    if (!token || token === null)
      return res.status(401).json({ error: "No token provided" });

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).json({ error: "Token badformatted" });

    const validToken = await new Promise((res) => {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) return res(false);
        
        req.session = data;

        return res(true);
      });
    });

    if (validToken) return next();
    return res.status(403).json({ error: "Invalid authorization token" });
  },
};
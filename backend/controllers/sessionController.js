const Session = require("../models/Session");
const jwt = require("jsonwebtoken");

const getSessions = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const sessions = await Session.find({ userId: decoded.userId });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSessions };

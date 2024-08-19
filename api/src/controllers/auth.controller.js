const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { db } = require("../database/index.js");
const { users } = require("../database/schema.js");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await db.query.users.findMany({});

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  const user = await db
    .insert(users)
    .values({ name, email, password })
    .returning();

  res.json(user);
};

module.exports = { login, register };

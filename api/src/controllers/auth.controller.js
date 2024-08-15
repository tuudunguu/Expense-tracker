const { readJson, saveJson } = require("../utils");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const users = readJson("users.json");
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
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const users = readJson("users.json");

  const user = users.find((user) => user.email === email);

  if (user) return res.status(400).json({ message: "User already exists" });

  const newUser = {
    id: v4(),
    username,
    email,
    password,
  };

  users.push(newUser);

  saveJson("users.json", users);

  // Send the newly created user object back in the response
  res.json(newUser);
};

// Export the login and register functions so they can be used in other parts of the application
module.exports = { login, register };

// Import the necessary utility functions from a local utils module
const { readJson, saveJson } = require("../utils");

// Import the jsonwebtoken library for generating and verifying JWTs
const jwt = require("jsonwebtoken");

// Import the v4 function from the uuid library to generate unique IDs
const { v4 } = require("uuid");

// Define an asynchronous login function that handles user authentication
const login = async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Read and parse the users data from the 'users.json' file
  const users = readJson("users.json");

  // Find a user that matches the provided email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  // If no matching user is found, return a 401 Unauthorized response
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // Generate a JWT (JSON Web Token) with the user's data and a secret key
  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      id: user.id,
    },
    process.env.JWT_SECRET // Use the secret key stored in the environment variables
  );

  // Send the generated token and user information back in the response
  res.json({
    token,
    user: {
      username: user.username,
      email: user.email,
      id: user.id,
    },
  });
};

// Define an asynchronous register function that handles new user registration
const register = async (req, res) => {
  // Extract username, email, and password from the request body
  const { username, email, password } = req.body;
  console.log("Register function called with data:", req.body);

  // Read and parse the users data from the 'users.json' file
  const users = readJson("users.json");

  // Check if a user with the same email already exists
  const user = users.find((user) => user.email === email);

  // If a user with the same email is found, return a 400 Bad Request response
  if (user) return res.status(400).json({ message: "User already exists" });

  // Create a new user object with a unique ID and the provided data
  const newUser = {
    id: v4(), // Generate a unique ID using UUID v4
    username,
    email,
    password,
  };

  // Add the new user to the list of users
  users.push(newUser);

  // Save the updated users list back to the 'users.json' file
  saveJson("users.json", users);

  // Send the newly created user object back in the response
  res.json(newUser);
};

// Export the login and register functions so they can be used in other parts of the application
module.exports = { login, register };

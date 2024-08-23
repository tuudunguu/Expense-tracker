// Import the jsonwebtoken library, which is used to create and verify JWTs (JSON Web Tokens)
const jwt = require("jsonwebtoken");

// Define a middleware function named 'authMiddleware' that takes 'req' (request), 'res' (response), and 'next' (next middleware function) as parameters
const authMiddleware = (req, res, next) => {
  // Check if the request path starts with "/auth". If it does, call 'next()' to move to the next middleware without requiring authentication
  if (req.path.startsWith("/auth")) return next();

  // Extract the 'Authorization' header from the request
  const auth = req.headers.authorization;

  // Split the 'Authorization' header to extract the token, assuming it's in the format "Bearer <token>"
  const token = auth?.split(" ")[1];

  // If no token is found, return a 401 Unauthorized response with a JSON error message "Нэвтрэнэ үү!" ("Please log in!")
  if (!token) return res.status(401).json({ error: "Нэвтрэнэ үү!" });

  try {
    // Verify the token using the secret key stored in the environment variable 'JWT_SECRET'
    // If the token is valid, the user information is extracted from it
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user information to the 'req' object so that it can be accessed by subsequent middleware or route handlers
    req.user = user;

    // Call 'next()' to pass control to the next middleware or route handler
    next();
  } catch (err) {
    // If token verification fails (e.g., token is invalid or expired), return a 401 Unauthorized response with a JSON error message "Нэвтрэнэ үү!"
    return res.status(401).json({ error: "Нэвтрэнэ үү! " });
  }
};

// Export the 'authMiddleware' function so it can be used in other parts of the application
module.exports = { authMiddleware };

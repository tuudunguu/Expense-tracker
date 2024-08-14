// Define an asynchronous function named 'getMe' that takes 'req' (request) and 'res' (response) as parameters
const getMe = async (req, res) => {
  try {
    // Extract the user object from the request. This assumes that the user information is already attached to 'req.user'
    const user = req.user;

    // Send the user object back to the client as a JSON response
    res.json(user);
  } catch (error) {
    // If an error occurs, log the error details to the console for debugging
    console.error(error);

    // Send a response with a 500 status code, indicating an internal server error, along with a JSON error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the 'getMe' function so it can be used in other parts of the application
module.exports = { getMe };

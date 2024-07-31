const fs = require("fs");
const path = require("path");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    console.log(`Reading accounts from ${filePath}`); // Added logging

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Accounts file not found" });
    }

    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    res.json(accounts);
  } catch (error) {
    console.error("Error in getAllAccounts:", error); // Updated logging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    console.log(`Writing account to ${filePath}`); // Added logging

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Accounts file not found" });
    }

    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const newAccount = req.body;
    accounts.push(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts));
    res.json(newAccount);
  } catch (error) {
    console.error("Error in createAccount:", error); // Updated logging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllAccounts, createAccount };

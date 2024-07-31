const fs = require("fs");
const path = require("path");

const getAllRecords = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    console.log(`Reading accounts from ${filePath}`); // Added logging

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Accounts file not found" });
    }

    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);

    res.json(records);
  } catch (error) {
    console.error("Error in getAllAccounts:", error); // Updated logging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createRecord = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    console.log(`Writing account to ${filePath}`); // Added logging

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Accounts file not found" });
    }

    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);

    const newRecord = req.body;
    records.push(newRecord);

    fs.writeFileSync(filePath, JSON.stringify(records));
    res.json(newRecord);
  } catch (error) {
    console.error("Error in createAccount:", error); // Updated logging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllRecords, createRecord };

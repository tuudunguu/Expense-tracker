const fs = require("fs");
const path = require("path");

const getAllAccounts = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "accounts.json");

  const rawData = fs.readFileSync(filePath);
  const accounts = JSON.parse(rawData);

  res.json(accounts);
};

const createAccount = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "accounts.json");

  const rawData = fs.readFileSync(filePath);
  const accounts = JSON.parse(rawData);

  const newAccount = req.body;
  accounts.push(newAccount);

  fs.writeFileSync(filePath, JSON.stringify(accounts));
  res.json(newAccount);
};

module.exports = { getAllAccounts, createAccount };

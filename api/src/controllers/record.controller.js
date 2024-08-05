const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const getAllRecords = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "records.json");
  const rawData = fs.readFileSync(filePath);
  const records = JSON.parse(rawData);

  res.json(records);
};

const createRecord = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "records.json");

  const rawData = fs.readFileSync(filePath);
  const records = JSON.parse(rawData);

  const newRecord = { id: uuidv4(), ...req.body };
  records.push(newRecord);

  fs.writeFileSync(filePath, JSON.stringify(records));
  res.json(newRecord);
};

const deleteRecord = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "records.json");

  const rawData = fs.readFileSync(filePath);
  const records = JSON.parse(rawData);

  const recordId = req.params.id;
  const updatedRecords = records.filter((record) => record.id !== recordId);

  fs.writeFileSync(filePath, JSON.stringify(updatedRecords));
  res.status(200).send({ message: "Category deleted successfully" });
};
module.exports = { getAllRecords, createRecord, deleteRecord };

const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database/index.js");
const { records } = require("../database/schema.js");

const getAllRecords = async (req, res) => {
  // const posts = await db.query.posts.findMany();

  // res.json(posts);
  const filePath = path.join(__dirname, "..", "data", "records.json");
  const rawData = fs.readFileSync(filePath);
  const records = JSON.parse(rawData);

  res.json(records);
};

const createRecord = async (req, res) => {
  const { money, time, title, status, date } = req.body;
  const numberTitle = parseInt(title, 10);

  const [newRecord] = await db
    .insert(records)
    .values({
      categoryId: numberTitle,
      date: date,
      amount: money,
      time: time,
      transaction_type: status,
    })
    .returning();

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

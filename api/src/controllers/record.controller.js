const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database/index.js");
const { records } = require("../database/schema.js");

const getAllRecords = async (req, res) => {
  // const recordsData = await db.select().from(records);
  const recordsData = await db.query.records.findMany({
    with: {
      category: true,
    },
  });

  res.json(recordsData);
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
  const recordId = req.params.id;
  const removedRecord = await db.delete(records).where(records.id.eq(recordId));
  res.json(removedRecord);
};
module.exports = { getAllRecords, createRecord, deleteRecord };

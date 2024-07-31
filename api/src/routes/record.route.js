const { Router } = require("express");
const {
  getAllRecords,
  createRecord,
} = require("../controllers/record.controller");

const recordRouter = Router();

recordRouter.get("/", getAllRecords).post("/", createRecord);

module.exports = { recordRouter };

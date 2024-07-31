const express = require("express");
const cors = require("cors");
const { accountRouter } = require("./routes/account.route");
const { recordRouter } = require("./routes/record.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/accounts", accountRouter);
app.use("/Records", recordRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

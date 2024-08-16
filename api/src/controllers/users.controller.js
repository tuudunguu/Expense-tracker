const { db } = require("../database/index.js");
const { users } = require("../database/schema.js");

const getUsers = async (req, res) => {
  const users = await db.query.users.findMany({
    with: {
      posts: true,
    },
  });

  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await db
    .insert(users)
    .values({ name, email, password })
    .returning();

  res.json(user);
};

module.exports = { getUsers, createUser };

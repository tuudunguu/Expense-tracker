const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const getAllCategories = async (req, res) => {
  const users = await db.query.users.findMany({
    with: {
      posts: true,
    },
  });

  res.json(categories);
};

const createCategory = async (req, res) => {
  const { id, categoryIcon, categoryName } = req.body;

  const user = await db
    .insert(users)
    .values({ id, categoryIcon, categoryName })
    .returning();

  res.json(newCategory);
};
const deleteCategory = async (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "categories.json");

  const rawData = fs.readFileSync(filePath);
  const categories = JSON.parse(rawData);

  const categoryId = req.params.id;
  const updatedCategories = categories.filter(
    (category) => category.id !== categoryId
  );

  fs.writeFileSync(filePath, JSON.stringify(updatedCategories));
  res.status(200).send({ message: "Category deleted successfully" });
};

module.exports = { getAllCategories, createCategory, deleteCategory };

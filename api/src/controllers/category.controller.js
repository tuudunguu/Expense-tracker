const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database/index.js");
const { categories } = require("../database/schema.js");

const getAllCategories = async (req, res) => {
  const category = await db.query.categories({});

  res.json(category);
};

const createCategory = async (req, res) => {
  const { categoryName, categoryIcon } = req.body;
  console.log(req.body);

  const newCategory = await db
    .insert(categories)
    .values({ name: categoryName, icon_name: categoryIcon })
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

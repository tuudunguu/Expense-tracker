const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database/index.js");
const { categories } = require("../database/schema.js");

const getAllCategories = async (req, res) => {
  const categoriesData = await db.select().from(categories); // Assuming Drizzle ORM, update this as per your ORM's syntax
  res.json(categoriesData);
};

const createCategory = async (req, res) => {
  const { categoryName, categoryIcon } = req.body;

  const [newCategory] = await db
    .insert(categories)
    .values({ name: categoryName, icon_name: categoryIcon })
    .returning();

  res.json(newCategory);
};
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  const removedCategory = await db
    .delete(categories)
    .where(categories.id.eq(categoryId));

  res.json(removedCategory);
};

module.exports = { getAllCategories, createCategory, deleteCategory };

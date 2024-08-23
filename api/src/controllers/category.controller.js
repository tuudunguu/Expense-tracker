const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database/index.js");
const { categories } = require("../database/schema.js");
const { eq } = require("drizzle-orm");

const getAllCategories = async (req, res) => {
  try {
    const categoriesData = await db.query.categories.findMany({
      where: eq(categories.userId, req.user.id),
    });

    res.json(categoriesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching categories" });
  }
};

const createCategory = async (req, res) => {
  const { categoryName, categoryIcon } = req.body;

  try {
    const [newCategory] = await db
      .insert(categories)
      .values({
        name: categoryName,
        icon_name: categoryIcon,
        userId: req.user.id,
      })
      .returning();

    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating category" });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const removedCategory = await db
      .delete(categories)
      .where(eq(categories.id, categoryId));

    res.json(removedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting category" });
  }
};

module.exports = { getAllCategories, createCategory, deleteCategory };

const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const getAllCategories = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    console.log(`Reading categories from ${filePath}`); // Changed "accounts" to "categories"

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Categories file not found" }); // Changed "Accounts" to "Categories"
    }

    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);

    res.json(categories);
  } catch (error) {
    console.error("Error in getAllCategories:", error); // Changed "getAllAccounts" to "getAllCategories"
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    console.log(`Writing category to ${filePath}`); // Changed "account" to "category"

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Categories file not found" }); // Changed "Accounts" to "Categories"
    }

    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);

    const newCategory = { id: uuidv4(), ...req.body };
    categories.push(newCategory);

    fs.writeFileSync(filePath, JSON.stringify(categories));
    res.json(newCategory);
  } catch (error) {
    console.error("Error in createCategory:", error); // Changed "createAccount" to "createCategory"
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    console.log(`Deleting category from ${filePath}`);

    if (!fs.existsSync(filePath)) {
      console.error("File does not exist:", filePath);
      return res.status(500).json({ error: "Categories file not found" });
    }

    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);

    const categoryId = req.params.id;
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );

    fs.writeFileSync(filePath, JSON.stringify(updatedCategories));
    res.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error in deleteCategory:", error);
    res.status(500).json({ error: "Failed to delete category" });
  }
};

module.exports = { getAllCategories, createCategory, deleteCategory };

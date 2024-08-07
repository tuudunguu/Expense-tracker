"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext(null);

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/categories");
      setCategory(response.data);
    };
    getData();
  }, []);

  const createCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
    };

    const response = await axios.post(
      "http://localhost:3001/categories",
      newCategory
    );
    setCategory([...category, response.data]);
  };

  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:3001/categories/${id}`);
    setCategory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CategoryContext.Provider
      value={{
        createCategory,
        categoryName,
        setCategoryName,
        categoryIcon,
        setCategoryIcon,
        category,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

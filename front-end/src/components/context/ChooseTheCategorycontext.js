"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext(null);

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const Authorization = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/categories", {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });
        setCategory(response.data);
      } catch (error) {
        setError("Failed to load categories");
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const createCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/categories",
        newCategory
      );
      setCategory([...category, response.data]);
      // Optionally reset input fields after creation
      setCategoryName("");
      setCategoryIcon("");
    } catch (error) {
      setError("Failed to create category");
      console.error("Error creating category:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3001/categories/${id}`);
      setCategory((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setError("Failed to delete category");
      console.error("Error deleting category:", error);
    } finally {
      setLoading(false);
    }
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
        loading,
        error,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

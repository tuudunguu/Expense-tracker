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
  const [Authorization, setAuthorization] = useState(null); // 1. Create a state to store the token

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 2. Check if window (and therefore localStorage) is available
      const token = localStorage.getItem("token");
      setAuthorization(token); // 3. Set the token in state if it exists
    }
  }, []); // 4. Empty dependency array to run only on client-side

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/categories", {
          headers: {
            Authorization: `Bearer ${Authorization}`, // 5. Use the state variable for the token
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

    if (Authorization) {
      // 6. Ensure the token is set before making the API call
      getData();
    }
  }, [Authorization]); // 7. Add Authorization as a dependency to trigger the effect when it changes

  const createCategory = async () => {
    const newCategory = {
      categoryName,
      categoryIcon,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/categories",
        newCategory,
        {
          headers: {
            Authorization: `Bearer ${Authorization}`, // 8. Add the Authorization header to the post request
          },
        }
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
      await axios.delete(`http://localhost:3001/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${Authorization}`, // 9. Add the Authorization header to the delete request
        },
      });
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

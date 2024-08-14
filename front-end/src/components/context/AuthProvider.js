"use client";
// This directive is used in Next.js to indicate that this file should be treated as a client-side component.

import { api } from "@/lib/axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

// Importing necessary modules and hooks:
// - `api`: Axios instance for making HTTP requests.
// - `usePathname` and `useRouter`: Hooks from Next.js for navigation and accessing the current path.
// - `useEffect`, `useState`, `createContext`, `useContext`: React hooks for managing state, side effects, and context.
// - `toast`: A library for displaying notifications.

const AuthContext = createContext();
// Creating a context named `AuthContext` to hold authentication-related data and functions.

const authPaths = ["/login", "/register"];
// Defining an array of paths that don't require authentication.

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // The `AuthProvider` component provides authentication-related state and functions to its children.
  // It initializes two pieces of state: `user` (to store the authenticated user) and `isReady` (to indicate if the auth process is ready).

  const login = async (email, password) => {
    console.log(email);
    try {
      const res = await api.post("/auth/login", { email, password });
      // Sends a POST request to the `/auth/login` endpoint with the email and password.

      localStorage.setItem("token", res.data.token);
      // Stores the received JWT token in the local storage.

      setUser(res.data.user);
      // Sets the user state with the received user data.

      router.replace("/");
      // Redirects the user to the home page after successful login.
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      // If an error occurs, it is logged to the console and an error notification is shown.
    }
  };

  const register = async (username, email, password) => {
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });
      // Sends a POST request to the `/auth/register` endpoint to register a new user.

      router.push("/Log-in");
      // Redirects the user to the login page after successful registration.
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      // If an error occurs during registration, it is logged and an error notification is shown.
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);
        // Sets `isReady` to `false` while loading the user.

        const token = localStorage.getItem("token");
        // Retrieves the JWT token from local storage.

        if (!token) return;
        // If no token is found, the function exits early.

        const res = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Sends a GET request to `/users/me` to fetch the authenticated user's data.

        setUser(res.data);
        // Sets the user state with the fetched user data.
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        toast.error("Your session has expired. Please login again.");
        // If an error occurs (e.g., invalid token), the token is removed from local storage, an error is logged, and a notification is shown.
      } finally {
        setIsReady(true);
        // Sets `isReady` to `true` indicating that the user loading process is complete.
      }
    };

    loadUser();
    // Runs `loadUser` when the component is mounted to check if the user is authenticated.
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;
    // If the current path is in `authPaths`, the function exits early (no need to check authentication).

    if (!isReady) return;
    // If `isReady` is `false`, the function exits early (waiting for the user data to be loaded).

    // if (!user) router.replace("/Log-in");
    // If the user is not authenticated, redirects them to the login page.
  }, [pathname, user, isReady]);
  // The above `useEffect` runs whenever `pathname`, `user`, or `isReady` changes.

  if (!isReady) return null;
  // If the auth process is not ready, the component renders nothing.

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
  // The `AuthContext.Provider` component provides `user`, `login`, and `register` functions to its children.
};

// A custom hook `useAuth` that provides access to the `AuthContext`.
export const useAuth = () => useContext(AuthContext);

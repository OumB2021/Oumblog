"use client";
import { createContext, useState } from "react";

type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>("light");

const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value === "dark" ? "dark" : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    return getFromLocalStorage();
  });
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

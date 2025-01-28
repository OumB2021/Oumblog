"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  return (
    <button className="bg-red-400 p-2 rounded-md" onClick={() => {}}>
      {theme === "dark" ? (
        <Sun
          className="text-gray-600 hover:text-gray-900"
          size={24}
          strokeWidth={1.5}
        />
      ) : (
        <Moon
          className="text-gray-600 hover:text-gray-900"
          size={24}
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
export default ThemeToggle;

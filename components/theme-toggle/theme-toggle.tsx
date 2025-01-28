"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  return (
    <button className="bg-zinc-300 p-[10px] rounded-md" onClick={() => {}}>
      {theme === "dark" ? (
        <Sun
          className="text-zinc-800 hover:text-black"
          size={20}
          strokeWidth={1.5}
        />
      ) : (
        <Moon
          className="text-zinc-800 hover:text-black"
          size={20}
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
export default ThemeToggle;

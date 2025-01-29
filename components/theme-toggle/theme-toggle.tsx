"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button className="bg-zinc-300 p-[10px] rounded-md" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (
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

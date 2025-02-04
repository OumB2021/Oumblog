"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../hamburger-menu";
import { cn } from "@/lib/utils";

function AuthLinks({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  const status = "authenticated";
  return (
    <>
      {status === "authenticated" ? (
        <Link
          href="/login"
          className={cn(
            "bg-zinc-800 px-4 py-[10px] text-white  font-medium rounded-md",
            className
          )}
        >
          Login
        </Link>
      ) : (
        <div className="flex items-center gap-[10px]">
          <Link
            href="/write"
            className={cn(
              "bg-zinc-800 px-4 py-[10px] text-white  font-medium rounded-md",
              className
            )}
          >
            Write
          </Link>
        </div>
      )}
    </>
  );
}
export default AuthLinks;

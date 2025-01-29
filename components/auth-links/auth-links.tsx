"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../hamburger-menu";
import { cn } from "@/lib/utils";

function AuthLinks({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link
          href="/login"
          className={cn(
            "bg-zinc-800 dark:bg-zinc-100 px-4 py-[10px] text-white dark:text-zinc-800 font-medium rounded-md",
            className
          )}
        >
          Login
        </Link>
      ) : (
        <div className="flex items-center gap-[10px]">
          <Link href="/write">Write</Link>
          className=
          {cn(
            "bg-zinc-800 dark:bg-zinc-100 px-4 py-[10px] text-white dark:text-zinc-800 font-medium rounded-md",
            className
          )}
        </div>
      )}
    </>
  );
}
export default AuthLinks;

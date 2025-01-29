"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "../hamburger-menu";

function AuthLinks() {
  const [open, setOpen] = useState(true);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link
          href="/login"
          className="bg-zinc-800 dark:bg-zinc-100 px-4 py-[10px] text-white dark:text-zinc-800 font-medium rounded-md"
        >
          Login
        </Link>
      ) : (
        <div className="flex items-center gap-[10px]">
          <Link href="/write">Write</Link>
          <span className="g-zinc-800 dark:bg-zinc-100 px-4 py-2 text-white dark:text-zinc-800 font-medium rounded-md">
            Logout
          </span>
        </div>
      )}
    </>
  );
}
export default AuthLinks;

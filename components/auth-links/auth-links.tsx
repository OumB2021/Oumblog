"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

function AuthLinks({ className }: { className?: string }) {
  const { isSignedIn } = useUser();
  return (
    <>
      {!isSignedIn ? (
        <Link
          href="/sign-in"
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

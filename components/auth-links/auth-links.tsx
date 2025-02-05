"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

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

          <div className="bg-red-800  text-white font-medium rounded-md cursor-pointer">
            <SignOutButton>
              <span className="w-full h-full px-4 py-[10px] block text-white">
                Sign Out
              </span>
            </SignOutButton>
          </div>
        </div>
      )}
    </>
  );
}
export default AuthLinks;

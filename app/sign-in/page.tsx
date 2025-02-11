"use client";

import { githubAuth, googleAuth } from "@/actions/auth-action";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/sync-user")
        .then((res) => res.json())
        .then((data) => console.log("User sync response:", data));

      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center mt-10 md:mt-[100px]">
        <Loader2 className="text-muted-foreground" size={30} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-[100px] py-14 px-10 bg-zinc-50 rounded-lg border gap-6 shadow-sm size-fit mx-auto">
      {/* Title */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-extrabold text-lg">Sign in to OumBlog</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back! Please sign in to continue
        </p>
      </div>
      {/* BUTTONS */}
      <div className="flex flex-col items-center justify-center gap-4">
        <form action={githubAuth}>
          <button className="border rounded-md px-14 py-4 shadow-sm flex items-center justify-center gap-2">
            <Image src="/github.svg" alt="github logo" width={20} height={20} />
            <p className="text-sm text-muted-foreground">
              Sign in with <strong>Github</strong>
            </p>
          </button>
        </form>

        <form action={googleAuth}>
          <button
            className="border rounded-md px-14 py-4 shadow-sm flex items-center justify-center gap-2"
            type="submit"
          >
            <Image
              src="/google-logo.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            <p className="text-sm text-muted-foreground">
              Sign in with <strong>Google</strong>
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}

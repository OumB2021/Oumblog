"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    router.push("/");
  }
  return (
    <div className="flex justify-center items-center mt-[50px] p-4">
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </div>
  );
}

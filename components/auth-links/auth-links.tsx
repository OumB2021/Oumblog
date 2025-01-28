import Link from "next/link";

function AuthLinks() {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link
          href="/login"
          className="bg-zinc-800 px-4 py-2 text-white font-medium rounded-md"
        >
          Login
        </Link>
      ) : (
        <div className="flex items-center gap-[10px]">
          <Link href="/write">Write</Link>
          <span className="bg-zinc-800 px-4 py-2 text-white font-medium rounded-md">
            Logout
          </span>
        </div>
      )}
    </>
  );
}
export default AuthLinks;

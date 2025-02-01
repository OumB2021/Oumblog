import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col bg-white shadow-sm gap-4 py-20 px-14 rounded-md ">
        <div className="flex flex-col text-center mb-4">
          <Link
            href="/"
            className="font-bold text-xl text-zinc-700 hover:text-black"
          >
            OumBlog
          </Link>
          <p className="text-sm text-muted-foreground">
            Welcome back! Please sign in to continue
          </p>
          <hr className="mt-4 " />
        </div>
        <div className="rounded-lg font-bold cursor-pointer bg-red-500 flex items-center gap-2 py-3 px-4 text-white">
          <Image src="/google.png" alt="Google logo" width={20} height={20} />
          Sign in with Google
        </div>

        <div className="rounded-lg font-bold cursor-pointer bg-[#1877F2] flex items-center gap-2 py-3 px-4 text-white">
          <Image
            src="/facebook-logo.svg"
            alt="Google logo"
            width={24}
            height={24}
            className=""
          />
          Sign in with Facebook
        </div>

        <div className="rounded-lg font-bold cursor-pointer bg-zinc-700 flex items-center gap-2 py-3 px-4 text-white">
          <Image
            src="/github.svg"
            alt="Google logo"
            width={24}
            height={24}
            className=""
          />
          Sign in with GitHub
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

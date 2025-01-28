import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../auth-links/auth-links";
import ThemeToggle from "../theme-toggle/theme-toggle";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-[10px]">
      {/* LOGO */}
      <div className="flex flex-1">
        <Link
          href="/"
          className="font-bold text-xl text-zinc-700 hover:text-black"
        >
          OumBlog
        </Link>
      </div>

      {/* MENU */}
      <div className="hidden md:flex gap-[10px] flex-1 bg-red-400">
        <Image src="/facebook.png" width={24} height={24} alt="logo" />
        <Image src="/instagram.png" width={24} height={24} alt="logo" />
        <Image src="/tiktok.png" width={24} height={24} alt="logo" />
        <Image src="/youtube.png" width={24} height={24} alt="logo" />
      </div>

      {/* SOCIAL */}
      <div className="flex gap-[20px] flex-1 items-center">
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <div className="flex items-center justify-center gap-1">
          <ThemeToggle />
          <AuthLinks />
        </div>
      </div>
    </div>
  );
}
export default Navbar;

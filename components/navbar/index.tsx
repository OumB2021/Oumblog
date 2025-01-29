import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../auth-links/auth-links";
import ThemeToggle from "../theme-toggle/theme-toggle";
import HamburgerMenu from "../hamburger-menu";

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
      <div className="hidden md:flex gap-[10px] flex-1 justify-center">
        <Image src="/facebook.png" width={24} height={24} alt="logo" />
        <Image src="/instagram.png" width={24} height={24} alt="logo" />
        <Image src="/tiktok.png" width={24} height={24} alt="logo" />
        <Image src="/youtube.png" width={24} height={24} alt="logo" />
      </div>

      {/* SOCIAL */}
      <div className="flex gap-1 md:gap-[20px] flex-1 justify-end items-center text-sm  text-zinc-700 hover:text-black ">
        <Link href="/" className="hidden md:flex">
          Home
        </Link>
        <Link href="/" className="hidden md:flex">
          Contact
        </Link>
        <Link href="/" className="hidden md:flex">
          About
        </Link>
        <AuthLinks />
        <HamburgerMenu />
      </div>
    </div>
  );
}
export default Navbar;

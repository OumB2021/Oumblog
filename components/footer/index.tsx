import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center p-10">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="oumb blog" width={40} height={40} />
          <Link
            href="/"
            className="font-bold text-xl text-zinc-700 hover:text-black"
          >
            OumBlog
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
          temporibus natus est voluptates. Non officia placeat iure ipsam,
          officiis, cum commodi alias rem similique, itaque impedit minima
          numquam earum.
        </p>

        <div className="flex gap-[10px]">
          <Image src="/facebook.png" width={18} height={18} alt="logo" />
          <Image src="/instagram.png" width={18} height={18} alt="logo" />
          <Image src="/tiktok.png" width={18} height={18} alt="logo" />
          <Image src="/youtube.png" width={18} height={18} alt="logo" />
        </div>
      </div>

      <div className="flex justify-between md:justify-end flex-1 gap-4 md:gap-10 lg:gap-24 w-full">
        <div className="flex flex-col text-sm text-muted-foreground">
          <span className="font-semibold text-zinc-600 text-base">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="flex flex-col text-sm text-muted-foreground">
          <span className="font-semibold text-zinc-600 text-base">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className="flex flex-col text-sm text-muted-foreground">
          <span className="font-semibold text-zinc-600 text-base">Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;

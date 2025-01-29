import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Popular Categories
      </h1>
      <div className="flex flex-wrap justify-between mt-10 ">
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 w-[15%] h-[80px] bg-red-100 rounded-md justify-center"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 w-[15%] h-[80px] bg-yellow-100 rounded-md justify-center"
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover h-8 w-8"
          />
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 w-[15%] h-[80px] bg-blue-100 rounded-md justify-center"
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover h-8 w-8"
          />
          Culture
        </Link>

        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 w-[15%] h-[80px] bg-purple-100 rounded-md justify-center"
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover h-8 w-8"
          />
          Coding
        </Link>

        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 w-[15%] h-[80px] bg-emerald-100 rounded-md justify-center"
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover h-8 w-8"
          />
          Food
        </Link>
      </div>
    </div>
  );
}
export default CategoryList;

import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold">Popular Categories</h1>
      <div className="flex mt-10">
        <Link href="/blog?cat=style" className="flex items-center gap-2">
          <Image src="/style.png" alt="" width={32} height={32} className="" />{" "}
          Style
        </Link>

        <Link href="/blog?cat=style">
          <Image src="/travel.png" alt="" width={32} height={32} className="" />{" "}
          Travel
        </Link>

        <Link href="/blog?cat=style">
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className=""
          />
          Culture
        </Link>

        <Link href="/blog?cat=style">
          <Image src="/coding.png" alt="" width={32} height={32} className="" />{" "}
          Coding
        </Link>

        <Link href="/blog?cat=style">
          <Image src="/food.png" alt="" width={32} height={32} className="" />{" "}
          Food
        </Link>
      </div>
    </div>
  );
}
export default CategoryList;

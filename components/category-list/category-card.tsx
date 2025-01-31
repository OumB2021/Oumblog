import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type categoryCardProps = {
  color: string;
  title: string;
  image?: boolean;
};

function CategoryCard({ color, title, image = true }: categoryCardProps) {
  return (
    <Link
      href={`/blog?cat=${title}`}
      className={clsx(
        `flex items-center gap-2 ${
          image ? "h-[80px]" : "h-10"
        } rounded-md justify-center`,
        `${color}`
      )}
    >
      {image && (
        <Image
          src={`/${title}.png`}
          alt="img"
          width={32}
          height={32}
          className="rounded-full object-cover h-8 w-8"
        />
      )}
      <span className="capitalize">{title}</span>
    </Link>
  );
}
export default CategoryCard;

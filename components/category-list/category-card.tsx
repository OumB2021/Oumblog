import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type categoryCardProps = {
  color: string;
  title: string;
};

function CategoryCard({ color, title }: categoryCardProps) {
  return (
    <Link
      href={`/blog?cat=${title}`}
      className={clsx(
        "flex items-center gap-2 h-[80px] rounded-md justify-center",
        `${color}`
      )}
    >
      <Image
        src={`/${title}.png`}
        alt="img"
        width={32}
        height={32}
        className="rounded-full object-cover h-8 w-8"
      />
      <span className="capitalize">{title}</span>
    </Link>
  );
}
export default CategoryCard;

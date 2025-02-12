import Image from "next/image";
import Link from "next/link";

function MenuCard({ image }: { image?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-4">
      {image && (
        <div className="relative w-1/5 aspect-square ">
          <Image
            src="/travel.png"
            alt=""
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}

      <div className="w-4/5 flex flex-col gap-1">
        <span className="bg-red-400 rounded-xl size-fit px-3 py-[2px] text-sm font-medium text-white">
          Travel
        </span>
        <h3 className="line-clamp-2 font-semibold text-zinc-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <span>John Doe</span>
          <span className="text-muted-foreground">10.03.2024</span>
        </div>
      </div>
    </Link>
  );
}
export default MenuCard;

import { formattedDate } from "@/lib/utils";
import { ICategory } from "@/models/Category";
import { IPost } from "@/models/Post";
import { IUser } from "@/models/User";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type MenuCardProps = {
  image?: boolean;
  post: IPost;
};

function MenuCard({ image, post }: MenuCardProps) {
  if (!post) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  const user = post.user as IUser;
  const category = post.category as ICategory;
  const { name } = user;
  const { title } = category;
  const date = formattedDate(post.createdAt);
  return (
    <Link href={`/post/${post.slug}`} className="flex items-center gap-4">
      {image && post.image && (
        <div className="relative w-1/5 aspect-square ">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}

      <div className="w-4/5 flex flex-col gap-1">
        <span className="bg-red-400 rounded-xl size-fit px-3 py-[2px] text-sm font-medium text-white">
          {title}
        </span>
        <h3 className="line-clamp-2 font-semibold text-zinc-600">
          {post.title}
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <span>{name}</span>
          <span className="text-muted-foreground">{date}</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;

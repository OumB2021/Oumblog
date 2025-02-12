import { IComment } from "@/models/Comment";
import Image from "next/image";

function SingleComment({ item }: { item: IComment }) {
  const { user, content } = item;
  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-sm">
      <div className="flex items-center gap-4 ">
        <div className="w-[50px] h-[50px] relative">
          <Image
            src={user.image}
            alt=""
            fill
            className="rounded-full object-fill"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="text-zinc-800 font-semibold text-base">
            {user.name}
          </span>
          <span>01.01.2025</span>
        </div>
      </div>
      <p className="text-sm md:text-base text-zinc-600">{content}</p>
    </div>
  );
}
export default SingleComment;

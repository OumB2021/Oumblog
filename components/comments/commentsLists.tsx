import Image from "next/image";

function CommentsList() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] relative">
          <Image
            src="/p1.jpg"
            alt=""
            fill
            className="rounded-full object-fill"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="text-zinc-800 font-semibold text-base">
            John Doe
          </span>
          <span>01.01.2025</span>
        </div>
      </div>
    </div>
  );
}
export default CommentsList;

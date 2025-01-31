import Image from "next/image";

function SingleComment() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 mt-10">
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
      <p className="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores enim
        vero doloribus cupiditate consequatur hic atque quae architecto
        reprehenderit aliquam animi sapiente fugiat, porro ratione fugit quos
        sint nobis aut?
      </p>
    </div>
  );
}
export default SingleComment;

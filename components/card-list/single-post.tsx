import Image from "next/image";
import Link from "next/link";

function SinglePost() {
  return (
    <div className="mb-[50px] flex gap-10 items-center mt-5">
      <div className="flex-1 h-[350px] relative">
        <Image src="/car.jpg" alt="" fill className="rounded-md object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">11.02.2024</span>
          <span className="font-medium text-red-500">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className="text-sm font-normal text-muted-foreground line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore
          exercitationem ut neque, hic, sapiente officiis ratione ab eaque
          laboriosam unde laborum illo consectetur. Sit inventore quas
          praesentium necessitatibus quaerat?
        </p>
        <Link
          href="/"
          className="size-fit font-medium bg-zinc-200 py-2 px-4 rounded-md text-zinc-700 hover:text-black"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
export default SinglePost;

import Image from "next/image";

function Featured() {
  return (
    <div className="mt-8">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center p-4 space-y-2">
        {/* TITLE */}
        <h1 className="text-7xl font-bold">Welcome on my Blog</h1>
        <p className="text-base text-muted-foreground">
          A collection of experiences, reflections, and insights to inspire your
          journey.
        </p>
      </div>

      <div className="mt-[60px] flex items-center gap-[50px]">
        {/* Image */}
        <div className="relative h-96 flex-1 ">
          <Image
            src="/p1.jpg"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Image */}
        <div className="flex-1 flex items-start flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-muted-foreground ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quidem deleniti fugit doloribus perspiciatis reprehenderit quam,
            officia sapiente cupiditate doloremque. Illo quasi reiciendis illum
            vero earum voluptatum eos praesentium nisi.
          </p>

          <button className="rounded-md bg-zinc-800 dark:bg-zinc-100 px-4 py-[10px] text-white dark:text-zinc-800">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured;

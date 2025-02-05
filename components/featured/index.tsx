import Image from "next/image";

function Featured() {
  return (
    <div className="mt-8">
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center p-4 space-y-2 text-center">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
          Welcome to my Blog
        </h1>
        <p className="text-base text-muted-foreground">
          A collection of experiences, reflections, and insights to inspire your
          journey.
        </p>
      </div>

      <div className="mt-10 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
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
        <div className=" justify-center flex-1 flex md:items-start items-center flex-col gap-4 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-muted-foreground ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quidem deleniti fugit doloribus perspiciatis reprehenderit quam,
            officia sapiente cupiditate doloremque. Illo quasi reiciendis illum
            vero earum voluptatum eos praesentium nisi.
          </p>

          <button className="rounded-md bg-zinc-800 px-4 py-[10px] text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured;

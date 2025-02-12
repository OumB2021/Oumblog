import CommentSection from "@/components/comments/comments";
import Menu from "@/components/menu";
import { IPost } from "@/models/Post";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}
    `,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function SinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug || "";
  const data = await getData(slug);

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10 mt-10">
        <div className="flex-1 flex flex-col items-center md:items-start gap-5 md:gap-14">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
            {data.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={data.user.image}
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="text-zinc-800 font-semibold text-base">
                {data.user.name}
              </span>
              <span>01.01.2025</span>
            </div>
          </div>
        </div>
        <div className="w-full md:flex-1 h-[200px] md:h-[350px] relative">
          <Image
            src={data.image}
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-[50px] flex gap-10">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <p>{data.description}</p>
            <h1 className="text-lg md:text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, ipsum.
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, voluptate consectetur! Repellat dolores accusamus earum!
              In dolores voluptatum maxime! Velit, facilis? Itaque atque aut
              fugit doloremque veniam error dolores nemo?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, voluptate consectetur! Repellat dolores accusamus earum!
              In dolores voluptatum maxime! Velit, facilis? Itaque atque aut
              fugit doloremque veniam error dolores nemo? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Natus a id tenetur, facilis
              maiores, quasi quo cumque voluptates nesciunt et ad reiciendis
              ipsa deserunt deleniti, delectus totam aperiam sequi accusamus.
            </p>
          </div>
          <div>
            <CommentSection />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
export default SinglePage;

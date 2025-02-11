import { IPost } from "@/models/Post";
import Pagination from "../pagination";
import SinglePost from "./single-post";

const getData = async (page: number): Promise<IPost[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function CardList({ page }: { page: number }) {
  const data: IPost[] = await getData(page);
  return (
    <div className="w-full md:w-2/3 ">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Recent Posts
      </h1>
      <div className="">
        {data.map((post: IPost) => (
          <SinglePost key={post.slug} post={post} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}
export default CardList;

import { IPost } from "@/models/Post";
import Pagination from "../pagination";
import SinglePost from "./single-post";

// const getData = async (): Promise<IPost[]> => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

async function CardList() {
  // const data: IPost[] = await getData();
  return (
    <div className="w-full md:w-2/3 ">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Recent Posts
      </h1>
      <div className="">
        {Array.from({ length: 3 }).map((post, index) => (
          <SinglePost key={index} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}
export default CardList;

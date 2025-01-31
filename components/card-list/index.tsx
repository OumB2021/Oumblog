import Pagination from "../pagination";
import SinglePost from "./single-post";

function CardList() {
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

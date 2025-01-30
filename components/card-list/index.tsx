import Pagination from "../pagination";
import SinglePost from "./single-post";

function CardList() {
  return (
    <div className="w-2/3 ">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Recent Posts
      </h1>
      <div className="">
        <SinglePost />
      </div>

      <Pagination />
    </div>
  );
}
export default CardList;

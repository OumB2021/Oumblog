import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./category-card";

const categories = [
  {
    color: "bg-red-100",
    title: "style",
  },
  {
    color: "bg-yellow-100",
    title: "Travel",
  },
  {
    color: "bg-blue-100",
    title: "Culture",
  },
  {
    color: "bg-purple-100",
    title: "Coding",
  },
  {
    color: "bg-emerald-100",
    title: "Food",
  },
  {
    color: "bg-orange-100",
    title: "Fashion",
  },
];
function CategoryList() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Popular Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full justify-between gap-4 mt-5">
        {categories.map(({ color, title }) => (
          <CategoryCard key={title} color={color} title={title} />
        ))}
      </div>
    </div>
  );
}
export default CategoryList;

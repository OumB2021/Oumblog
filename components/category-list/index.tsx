import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./category-card";

const categories = [
  {
    color: "yellow",
    title: "style",
  },
  {
    color: "yellow",
    title: "Travel",
  },
  {
    color: "blue",
    title: "Culture",
  },
  {
    color: "purple",
    title: "Coding",
  },
  {
    color: "emerald",
    title: "Food",
  },
  {
    color: "orange",
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

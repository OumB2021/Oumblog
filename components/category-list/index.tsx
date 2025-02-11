import { getCategories } from "@/data/get-categories";
import CategoryCard from "./category-card";
import { ICategory } from "@/models/Category";

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

const getData = async (): Promise<ICategory[]> => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function CategoryList() {
  const fetchedCategories: ICategory[] = await getData();

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Popular Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full justify-between gap-4 mt-5">
        {fetchedCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            color={category.color}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}
export default CategoryList;

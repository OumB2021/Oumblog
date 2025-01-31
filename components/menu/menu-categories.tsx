import CategoryCard from "../category-list/category-card";

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

function MenuCategories() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-sm text-muted-foreground font-medium">
        Dicover by topic
      </h2>
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {categories.map((category, i) => (
          <CategoryCard
            key={i}
            color={category.color}
            title={category.title}
            image={false}
          />
        ))}
      </div>
    </div>
  );
}
export default MenuCategories;

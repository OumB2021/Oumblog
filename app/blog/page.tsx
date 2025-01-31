import CardList from "@/components/card-list";
import Menu from "@/components/menu";

function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-[40px]">
      <h2 className="text-3xl font-bold bg-amber-200 px-4 py-2 rounded-md">
        Style Blogs
      </h2>
      <div className="flex gap-12 w-full mt-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
export default BlogPage;

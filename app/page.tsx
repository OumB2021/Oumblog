import CardList from "@/components/card-list";
import CategoryList from "@/components/category-list";
import Featured from "@/components/featured";
import Menu from "@/components/menu";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const page = parseInt((await searchParams).page as string) || 1;

  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-12 w-full mt-[50px]">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}

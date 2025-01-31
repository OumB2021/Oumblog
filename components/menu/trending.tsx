import MenuCard from "./menu-card";

function Trending() {
  return (
    <div className="flex flex-col">
      <h2 className="text-sm text-muted-foreground font-medium">
        What&apos;s trending ?
      </h2>
      <h1 className="text-2xl font-bold">Most Popular</h1>
      <div className="mt-5 flex flex-col gap-[35px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <MenuCard key={i} image={false} />
        ))}
      </div>
    </div>
  );
}
export default Trending;

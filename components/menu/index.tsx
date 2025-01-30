import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <div className="w-1/3">
      <div className="flex flex-col ">
        <h2 className="text-sm text-muted-foreground font-medium">
          What&apos;s trending ?
        </h2>
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <div className="mt-5">
          <Link href="/" className="flex items-center gap-4 ">
            <div className="relative w-1/5 aspect-square ">
              <Image src="/p1.jpeg" alt="" fill className="rounded-full" />
            </div>

            <div className="w-4/5">
              <span className="">Travel</span>
              <h3 className="line-clamp-2 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                fugiat autem harum in quibusdam, ipsum itaque blanditiis
                nesciunt aut eveniet.
              </h3>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>John Doe</span>
                <span>10.03.2024</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Menu;

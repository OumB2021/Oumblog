import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden text-white bg-zinc-800 dark:bg-zinc-100 p-2 rounded-md">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
export default HamburgerMenu;

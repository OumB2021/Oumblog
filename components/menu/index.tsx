import EditorPick from "./editor-pick";
import MenuCategories from "./menu-categories";
import Trending from "./trending";
import TrendingCard from "./trending-card";

function Menu() {
  return (
    <div className="w-1/3">
      <Trending />
      <MenuCategories />
      <EditorPick />
    </div>
  );
}
export default Menu;

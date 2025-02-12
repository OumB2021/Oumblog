export const getCategoryColor = (color: string) => {
  const colorMap: Record<string, string> = {
    red: "bg-red-100",
    yellow: "bg-yellow-100",
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    emerald: "bg-emerald-100",
    orange: "bg-orange-100",
  };
  return colorMap[color] || "bg-gray-100";
};

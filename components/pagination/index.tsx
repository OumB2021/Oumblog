function Pagination() {
  return (
    <div className="flex justify-between items-center">
      <button className="bg-red-500 px-4 py-[10px] text-white text-sm font-medium rounded-[2px]">
        Previous page
      </button>
      <button className="bg-red-500 px-4 py-[10px] text-white text-sm font-medium rounded-[2px]">
        Next page
      </button>
    </div>
  );
}
export default Pagination;

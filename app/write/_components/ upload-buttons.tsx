import { ImageIcon } from "lucide-react";
import { useRef } from "react";

function UploadButtons({
  setFile,
}: {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // Manually triggers file selection
  };

  return (
    <div className="flex items-center gap-4 w-[180px]">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {/* Button that triggers file input */}
      <button
        type="button"
        className="p-3 w-full border border-1 rounded-sm bg-white flex justify-start items-center gap-2"
        onClick={handleClick} // 🔹 Triggers the file input manually
      >
        <ImageIcon className="text-muted-foreground" size={16} />
        <p className="text-sm text-muted-foreground">Upload Image</p>
      </button>
    </div>
  );
}

export default UploadButtons;

import { ImageIcon, Upload, Video } from "lucide-react";

function UploadButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="p-4 border border-1 border-dashed hover:bg-zinc-200/50 border-zinc-300 rounded-full flex flex-col justify-center items-center gap-2 ">
        <ImageIcon className="text-muted-foreground" />
      </button>
      <button className="p-4 border border-1 border-dashed hover:bg-zinc-200/50 border-zinc-300 rounded-full flex flex-col justify-center items-center gap-2 ">
        <Upload className="text-muted-foreground" />
      </button>
      <button className="p-4 border border-1 border-dashed hover:bg-zinc-200/50 border-zinc-300 rounded-full flex flex-col justify-center items-center gap-2 ">
        <Video className="text-muted-foreground" />
      </button>
    </div>
  );
}
export default UploadButtons;

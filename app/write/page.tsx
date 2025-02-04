"use client";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function WritePage() {
  const editorRef = useRef<HTMLDivElement | null>(null); // Reference for the editor
  const [quill, setQuill] = useState<Quill | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (editorRef.current && !quill) {
      const q = new Quill(editorRef.current, {
        theme: "snow", // You can use 'bubble' or 'snow'
      });
      setQuill(q);
    }
  }, [quill]);

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Write a new blog
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="placeholder:text-4xl placeholder:font-medium p-4 text-4xl font-bold bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0"
        />

        <div className="flex items-center gap-2">
          <button>
            <PlusCircle
              className="text-muted-foreground hover:text-black"
              strokeWidth={1.5}
              size={30}
            />
          </button>
          {open && (
            <div className="flex items-center gap-4">
              <button>
                <Image src="/image.png" alt="" width={16} height={16} />
              </button>
              <button>
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button>
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
        </div>
        <div ref={editorRef} className="h-64" />
      </div>
    </div>
  );
}
export default WritePage;

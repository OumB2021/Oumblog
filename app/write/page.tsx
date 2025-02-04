"use client";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function WritePage() {
  const editorRef = useRef<HTMLDivElement | null>(null); // Reference for the editor
  const [quill, setQuill] = useState<Quill | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (editorRef.current && !quill) {
      const q = new Quill(editorRef.current, {
        theme: "snow", // You can use 'bubble' or 'snow'
      });
      setQuill(q);
    }
  }, [quill]);

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="placeholder:text-4xl p-4 text-4xl  focus-visible:ring-0"
      />
      <div>
        <button>
          <PlusCircle
            className="text-muted-foreground hover:text-black"
            strokeWidth={1.5}
            size={30}
          />
        </button>
        {open && (
          <div>
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
  );
}
export default WritePage;

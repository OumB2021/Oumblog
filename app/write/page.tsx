"use client";

import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import UploadButtons from "./_components/ upload-buttons";

function WritePage() {
  const editorRef = useRef<HTMLDivElement | null>(null); // Reference for the editor
  const [quill, setQuill] = useState<Quill | null>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editorRef.current && !quill) {
      const q = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write your blog content here...",
      });

      q.on("text-change", () => {
        setValue(q.root.innerHTML);
      });

      setQuill(q);
    }
  }, [quill]);

  console.log(value);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center md:text-left ">
          Write a new blog
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="md:placeholder:text-3xl placeholder:text-2xl placeholder:font-medium py-4 text-3xl w-full font-bold bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0"
        />

        <UploadButtons />

        <div ref={editorRef} className="h-64" />

        <button className="bg-zinc-800 px-4 py-[10px] text-white size-fit font-medium rounded-md ">
          Publish Blog
        </button>
      </div>
    </div>
  );
}
export default WritePage;

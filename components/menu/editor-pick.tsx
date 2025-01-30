import EditorPickCard from "./editor-pick-card";

function EditorPick() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-sm text-muted-foreground font-medium">
        Chosen by the editor
      </h2>
      <h1 className="text-2xl font-bold">Editors pick</h1>
      <div className="mt-5 flex flex-col gap-[35px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <EditorPickCard key={i} />
        ))}
      </div>
    </div>
  );
}
export default EditorPick;

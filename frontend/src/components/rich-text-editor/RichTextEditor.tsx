import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import MenuBar from "./MenuBar";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";

const lowlight = createLowlight(all);

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "p-4 outline-none font-inter overflow-hidden select:bg-black select:text-white",
      },
    },
    extensions: [
      StarterKit,
      Highlight,
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Table.configure({
        resizable: true,
      }),
    ],
  });

  return (
    <Card className="border rounded-lg gap-0">
      <CardHeader>
        <MenuBar editor={editor} />
      </CardHeader>
      <Separator />
      <CardContent>
        <EditorContent editor={editor} />
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;

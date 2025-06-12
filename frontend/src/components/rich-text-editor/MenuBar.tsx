import { Editor } from "@tiptap/react";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBlockquote,
  IconBold,
  IconClear,
  IconCode,
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconH1,
  IconH2,
  IconH3,
  IconHighlight,
  IconItalic,
  IconLineDashed,
  IconList,
  IconListNumbers,
  IconRowInsertBottom,
  IconRowInsertTop,
  IconRowRemove,
  IconStrikethrough,
  IconTable,
  IconTableColumn,
  IconTableRow,
  IconTypography,
} from "../../utils/Icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Toggle } from "../ui/toggle";

type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  const buttons = [
    {
      name: "Text",
      icon: <IconTypography />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
    },
    {
      name: "Bold",
      icon: <IconBold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      name: "Italic",
      icon: <IconItalic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      name: "Strikethrough",
      icon: <IconStrikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
    },
    {
      name: "Highlight",
      icon: <IconHighlight />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      isActive: editor.isActive("highlight"),
    },
    {
      name: "Heading 1",
      icon: <IconH1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading 2",
      icon: <IconH2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading 3",
      icon: <IconH3 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
    },
    {
      name: "Align Left",
      icon: <IconAlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      name: "Align Center",
      icon: <IconAlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      name: "Align Right",
      icon: <IconAlignRight />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
    {
      name: "Bullet List",
      icon: <IconList />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: <IconListNumbers />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      name: "Blockquote",
      icon: <IconBlockquote />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
    },
    {
      name: "Code Block",
      icon: <IconCode />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive("codeBlock"),
    },
    {
      name: "Divider",
      icon: <IconLineDashed />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      isActive: editor.isActive("horizontal"),
    },
    {
      name: "Insert Table",
      icon: <IconTable />,
      onClick: () =>
        editor.chain().focus().insertTable({ withHeaderRow: false }).run(),
      isActive: false,
    },
    {
      name: "Header Row",
      icon: <IconTableRow />,
      onClick: () => editor.chain().focus().toggleHeaderRow().run(),
      isActive: false,
    },
    {
      name: "Header Column",
      icon: <IconTableColumn />,
      onClick: () => editor.chain().focus().toggleHeaderColumn().run(),
      isActive: false,
    },
    {
      name: "Add Column Left",
      icon: <IconColumnInsertLeft />,
      onClick: () => editor.chain().focus().addColumnBefore().run(),
      isActive: false,
    },
    {
      name: "Add Column Right",
      icon: <IconColumnInsertRight />,
      onClick: () => editor.chain().focus().addColumnAfter().run(),
      isActive: false,
    },
    {
      name: "Delete Column",
      icon: <IconColumnRemove />,
      onClick: () => editor.chain().focus().deleteColumn().run(),
      isActive: false,
    },
    {
      name: "Add Row Top",
      icon: <IconRowInsertTop />,
      onClick: () => editor.chain().focus().addRowBefore().run(),
      isActive: false,
    },
    {
      name: "Add Row Bottom",
      icon: <IconRowInsertBottom />,
      onClick: () => editor.chain().focus().addRowAfter().run(),
      isActive: false,
    },
    {
      name: "Delete Row",
      icon: <IconRowRemove />,
      onClick: () => editor.chain().focus().deleteRow().run(),
      isActive: false,
    },
    {
      name: "Clear Formatting",
      icon: <IconClear />,
      onClick: () => editor.chain().focus().unsetAllMarks().clearNodes().run(),
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-wrap justify-evenly gap-2 md:gap-3 lg:gap-5 p-4">
      {buttons.map((button, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger>
            <Toggle
              className="cursor-pointer"
              variant="outline"
              key={index}
              onClick={button.onClick}
              pressed={button.isActive}
            >
              {button.icon}
            </Toggle>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit p-2 text-xs">
            {button.name}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default MenuBar;

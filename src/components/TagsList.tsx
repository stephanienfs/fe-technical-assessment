import Tag from "./Tag";

interface TagData {
  label: string;
  color?: "purple" | "blue" | "green" | "red" | "yellow";
}

interface TagsListProps {
  tags: TagData[];
  onAddTag?: () => void;
  showAddButton?: boolean;
}

export default function TagsList({
  tags,
  onAddTag,
  showAddButton = true,
}: TagsListProps) {
  if (tags.length === 0 && showAddButton) {
    return (
      <button
        onClick={onAddTag}
        className="text-xs text-gray-400 hover:text-gray-600 transition-colors rounded-[38px] border border-gray-200 p-1.5"
      >
        + Add Tag
      </button>
    );
  }

  if (tags.length === 0) {
    return null;
  }

  if (tags.length > 1) {
    const dotColors = {
      purple: "bg-purple-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
    };

    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-900">
        {tags.slice(0, 2).map((tag, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-[2px] ${
              dotColors[tag.color || "purple"]
            }`}
          ></span>
        ))}
        <span>{tags.length} tags</span>
      </span>
    );
  }

  return <Tag label={tags[0].label} color={tags[0].color || "purple"} />;
}

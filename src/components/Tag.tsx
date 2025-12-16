interface TagProps {
  label: string;
  color?: "purple" | "blue" | "green" | "red" | "yellow";
  onClick?: () => void;
}

export default function Tag({ label, color = "purple", onClick }: TagProps) {
  const dotColors = {
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-900 ${
        onClick ? "cursor-pointer hover:opacity-80" : ""
      }`}
      onClick={onClick}
    >
      <span className={`w-2 h-2 rounded-[2px] ${dotColors[color]}`}></span>
      {label}
    </span>
  );
}

import { Workflow, TagData } from "../types/workflow";
import TagsList from "./TagsList";

interface WorkflowRowProps {
  workflow: Workflow;
  onEdit?: (workflow: Workflow) => void;
  onDelete?: (workflow: Workflow) => void;
  onAddTag?: (workflow: Workflow) => void;
}

export default function WorkflowRow({
  workflow,
  onEdit,
  onDelete,
  onAddTag,
}: WorkflowRowProps) {
  const normalizedTags: TagData[] = workflow.tags.map((tag, index) => {
    if (typeof tag === "string") {
      const colors: TagData["color"][] = [
        "purple",
        "blue",
        "green",
        "red",
        "yellow",
      ];
      const colorIndex = index % colors.length;
      return { label: tag, color: colors[colorIndex] };
    }
    return tag;
  });

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {workflow.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>{workflow.icon}</span>
          <span>{workflow.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <TagsList
          tags={normalizedTags}
          onAddTag={() => onAddTag?.(workflow)}
          showAddButton={normalizedTags.length === 0}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {workflow.lastUpdated}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex items-center gap-1">
          <button
            onClick={() => onEdit?.(workflow)}
            className="p-1.5 w-6 h-6 border-radius-6px bg-gray-100 transition-colors rounded"
            title="Edit"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.92741 0C7.79222 0 7.65163 0.0540751 7.54889 0.156818L6.55931 1.14639L8.58713 3.17421L9.5767 2.18463C9.7876 1.97374 9.7876 1.63307 9.5767 1.42218L8.31135 0.156818C8.20319 0.0486676 8.06801 0 7.92741 0ZM5.98071 3.25534L6.4782 3.75283L1.57899 8.65203H1.0815V8.15454L5.98071 3.25534ZM0 7.70572L5.98071 1.72501L8.00852 3.75283L2.02782 9.73354H0V7.70572Z"
                fill="#09090B"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete?.(workflow)}
            className="p-1.5 w-6 h-6 border-radius-6px bg-gray-100 transition-colors rounded"
            title="Delete"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.84087 1.62225H5.13712L4.59636 2.163H2.70374V3.24451H10.2743V2.163H8.38162L7.84087 1.62225ZM8.652 4.86676V10.2743H4.32599V4.86676H8.652ZM3.24449 3.78526H9.7335V10.2743C9.7335 10.8691 9.24682 11.3558 8.652 11.3558H4.32599C3.73116 11.3558 3.24449 10.8691 3.24449 10.2743V3.78526Z"
                fill="#09090B"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

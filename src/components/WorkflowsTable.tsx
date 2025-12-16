import { Workflow } from "../types/workflow";
import WorkflowRow from "./WorkflowRow";

interface WorkflowsTableProps {
  workflows: Workflow[];
  onEdit?: (workflow: Workflow) => void;
  onDelete?: (workflow: Workflow) => void;
  onAddTag?: (workflow: Workflow) => void;
}

export default function WorkflowsTable({
  workflows,
  onEdit,
  onDelete,
  onAddTag,
}: WorkflowsTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider">
              Tags
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider">
              Last Updated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {workflows.map((workflow, index) => (
            <WorkflowRow
              key={index}
              workflow={workflow}
              onEdit={onEdit}
              onDelete={onDelete}
              onAddTag={onAddTag}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

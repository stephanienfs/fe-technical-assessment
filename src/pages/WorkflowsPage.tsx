import { useState, useMemo } from "react";
import { Workflow, TagData } from "../types/workflow";
import Sidebar from "../components/Sidebar";
import WorkflowsHeader from "../components/WorkflowsHeader";
import WorkflowsTable from "../components/WorkflowsTable";

// Mock data - esto se reemplazará con datos de AirOps
const mockWorkflows: Workflow[] = [
  {
    type: "Workflow",
    name: "Article Writer",
    icon: "📄",
    tags: [
      { label: "tag1", color: "purple" },
      { label: "tag2", color: "blue" },
    ],
    lastUpdated: "Today",
  },
  {
    type: "Agent",
    name: "Article Writer - Subproj",
    icon: "📄",
    tags: [{ label: "Test", color: "purple" }],
    lastUpdated: "This Week",
  },
  {
    type: "Workflow",
    name: "Content Idea Generator",
    icon: "💡",
    tags: [],
    lastUpdated: "Yesterday",
  },
  {
    type: "Workflow",
    name: "Workflow Name",
    icon: "💡",
    tags: [],
    lastUpdated: "2 Days Ago",
  },
  {
    type: "Workflow",
    name: "Workflow Name",
    icon: "💡",
    tags: [],
    lastUpdated: "Yesterday",
  },
  {
    type: "Agent",
    name: "Workflow Name",
    icon: "🍎",
    tags: [],
    lastUpdated: "Today",
  },
  {
    type: "Workflow",
    name: "Workflow Name",
    icon: "🍎",
    tags: [],
    lastUpdated: "Yesterday",
  },
  {
    type: "Workflow",
    name: "Workflow Name",
    icon: "✏️",
    tags: [{ label: "Content Creation", color: "blue" }],
    lastUpdated: "Today",
  },
  {
    type: "Workflow",
    name: "Workflow Name",
    icon: "✏️",
    tags: [{ label: "Content Creation", color: "blue" }],
    lastUpdated: "Today",
  },
  {
    type: "Agent",
    name: "Workflow Name",
    icon: "📊",
    tags: [{ label: "Content Creation", color: "blue" }],
    lastUpdated: "Today",
  },
  {
    type: "Agent",
    name: "Spreadsheet.csv",
    icon: "📊",
    tags: [{ label: "Content Creation", color: "blue" }],
    lastUpdated: "Today",
  },
];

export default function WorkflowsPage() {
  const [workflows] = useState<Workflow[]>(mockWorkflows);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar workflows basado en la búsqueda
  const filteredWorkflows = useMemo(() => {
    if (!searchQuery.trim()) return workflows;
    return workflows.filter(
      (workflow) =>
        workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workflow.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workflow.tags.some((tag) => {
          const tagLabel = typeof tag === "string" ? tag : tag.label;
          return tagLabel.toLowerCase().includes(searchQuery.toLowerCase());
        })
    );
  }, [workflows, searchQuery]);

  const handleEdit = (workflow: Workflow) => {
    console.log("Edit workflow:", workflow);
    // Aquí implementarás la lógica de edición
  };

  const handleDelete = (workflow: Workflow) => {
    console.log("Delete workflow:", workflow);
    // Aquí implementarás la lógica de eliminación
  };

  const handleSort = () => {
    console.log("Sort workflows");
    // Aquí implementarás la lógica de ordenamiento
  };

  const handleAddTag = (workflow: Workflow) => {
    console.log("Add tag to workflow:", workflow);
    // Aquí implementarás la lógica para agregar tags
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <WorkflowsHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSort={handleSort}
          />
          <WorkflowsTable
            workflows={filteredWorkflows}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAddTag={handleAddTag}
          />
        </div>
      </main>
    </div>
  );
}

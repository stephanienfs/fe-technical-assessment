import { useState, useEffect } from "react";
import { Workflow } from "../types/workflow";
import Sidebar from "../components/Sidebar";
import WorkflowsHeader from "../components/WorkflowsHeader";
import WorkflowsTable from "../components/WorkflowsTable";
import { useWorkflows } from "../hooks/useWorkflows";

const AIROPS_APP_UUID =
  import.meta.env.VITE_AIROPS_APP_UUID ||
  "5af860c1-d227-4d54-928c-93c622b5f310";

const AIROPS_WORKSPACE_TOKEN =
  import.meta.env.VITE_AIROPS_WORKSPACE_TOKEN || undefined;

export default function WorkflowsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { workflows, loading, error } = useWorkflows(
    AIROPS_APP_UUID,
    {
      searchquery: debouncedSearchQuery.trim() || undefined,
      type: undefined,
      limit: undefined,
    },
    AIROPS_WORKSPACE_TOKEN
  );

  const handleEdit = (workflow: Workflow) => {
    console.log("Edit workflow:", workflow);
  };

  const handleDelete = (workflow: Workflow) => {
    console.log("Delete workflow:", workflow);
  };

  const handleSort = () => {
    console.log("Sort workflows");
  };

  const handleAddTag = (workflow: Workflow) => {
    console.log("Add tag to workflow:", workflow);
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
          {!loading && !error && workflows.length > 0 && (
            <WorkflowsTable
              workflows={workflows}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddTag={handleAddTag}
            />
          )}
          {loading && (
            <div className="text-center py-8 text-gray-500">
              Loading workflows...
            </div>
          )}
          {error && (
            <div className="text-center py-8 text-red-500">Error: {error}</div>
          )}
          {!loading && !error && workflows.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">
                No workflows available
              </div>
              <div className="text-gray-500 text-sm">
                Try adjusting your search filters
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

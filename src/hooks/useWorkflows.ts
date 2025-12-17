import { useState, useEffect } from "react";

import { Workflow, WorkflowInputs } from "../types/workflow";
import { executeWorkflow } from "../services/airops";

interface UseWorkflowsResult {
  workflows: Workflow[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useWorkflows(
  appUuid?: string,
  inputs: WorkflowInputs = {},
  workspaceToken?: string
): UseWorkflowsResult {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadWorkflows = async () => {
    if (!appUuid) {
      setError(
        "No appUuid provided. Please provide the UUID of your published workflow."
      );
      setWorkflows([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const workflowInputs: WorkflowInputs = {
        searchquery:
          inputs.searchquery && inputs.searchquery.trim() !== ""
            ? inputs.searchquery.trim()
            : null,
        type: inputs.type && inputs.type.length > 0 ? inputs.type : [],
        limit: inputs.limit && inputs.limit > 0 ? inputs.limit : null,
        sort: inputs.sort || null,
      };

      const result = await executeWorkflow<Workflow[]>(
        appUuid,
        workflowInputs,
        workspaceToken
      );

      if (!result.success) {
        setError(result.error || "Error loading workflows");
        setWorkflows([]);
        return;
      }

      const workflowData = result.data as Workflow[];

      setWorkflows(workflowData);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setWorkflows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWorkflows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    appUuid,
    inputs.searchquery,
    inputs.type,
    inputs.limit,
    inputs.sort,
    workspaceToken,
  ]);

  return {
    workflows,
    loading,
    error,
    refetch: loadWorkflows,
  };
}

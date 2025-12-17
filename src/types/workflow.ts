/* Types to interact with AirOps API */

export interface WorkflowInputs {
  searchquery?: string | null;
  type?: Array<"Workflow" | "Agent"> | [];
  limit?: number | null;
  sort?: "ASC" | "DESC" | null;
}

export interface TagData {
  label: string;
  color?: "purple" | "blue" | "green" | "red" | "yellow";
}

export interface Workflow {
  type: "Workflow" | "Agent";
  name: string;
  icon: string;
  tags?: TagData[];
  lastUpdated: string | number;
}

export interface WorkflowResponse<T = any> {
  success: true;
  data: T;
  executionId?: number;
}

export interface WorkflowError {
  success: false;
  error: string;
  data: null;
}

export type WorkflowResult<T = any> = WorkflowResponse<T> | WorkflowError;

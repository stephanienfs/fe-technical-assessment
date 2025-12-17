import { WorkflowInputs, WorkflowResult } from "../types/workflow";

export async function executeWorkflow<T = any>(
  appUuid: string | undefined,
  inputs: WorkflowInputs = {},
  workspaceToken?: string
): Promise<WorkflowResult<T>> {
  if (!appUuid) {
    return {
      success: false,
      error:
        "No appUuid provided. Please provide the UUID of your published workflow.",
      data: null,
    };
  }

  try {
    const url = `https://api.airops.com/public_api/airops_apps/${appUuid}/execute`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    console.log("workspaceToken", workspaceToken);
    if (workspaceToken) {
      headers["Authorization"] = `Bearer ${workspaceToken}`;
    } else {
      console.warn("No workspace token provided");
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        inputs,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText || response.statusText };
      }
      throw new Error(
        errorData.message ||
          errorData.error ||
          `HTTP error! status: ${response.status}`
      );
    }

    const result = await response.json();

    const outputData = JSON.parse(result.result);

    return {
      success: true,
      data: outputData,
      executionId: result.id || result.execution_id,
    };
  } catch (error: any) {
    console.error("Error executing AirOps workflow:", error);
    return {
      success: false,
      error: error.message || "Unknown error",
      data: null,
    };
  }
}

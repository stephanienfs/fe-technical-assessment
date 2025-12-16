export interface TagData {
  label: string;
  color?: "purple" | "blue" | "green" | "red" | "yellow";
}

export interface Workflow {
  type: "Workflow" | "Agent";
  name: string;
  icon: string;
  tags: TagData[] | string[];
  lastUpdated: string;
}

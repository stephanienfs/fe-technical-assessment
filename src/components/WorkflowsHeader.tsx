interface WorkflowsHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSort?: () => void;
}

export default function WorkflowsHeader({
  searchQuery,
  onSearchChange,
  onSort,
}: WorkflowsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-900">Workflows</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={onSort}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Sort
          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L4.97455 4.97455L9.9491 0H0Z" fill="#09090B" />
          </svg>
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search workflows"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4574 9.00246C13.5141 6.94576 13.5141 3.59923 11.4574 1.54253C9.40073 -0.514176 6.05425 -0.514176 3.99758 1.54253C2.25275 3.28736 1.9885 5.88237 3.20411 7.9088C3.20411 7.9088 3.29143 8.05529 3.1735 8.17314C2.50071 8.84587 0.482246 10.8644 0.482246 10.8644C-0.053424 11.4 -0.180945 12.149 0.294085 12.6241L0.375874 12.7058C0.850904 13.1809 1.59995 13.0535 2.13557 12.5178C2.13557 12.5178 4.14977 10.5036 4.82117 9.8322C4.94475 9.70862 5.0912 9.79593 5.0912 9.79593C7.11759 11.0115 9.7126 10.7473 11.4574 9.00246ZM4.97143 8.02857C3.45174 6.50888 3.45178 4.03619 4.97147 2.5165C6.49117 0.996848 8.96385 0.996807 10.4835 2.5165C12.0032 4.03615 12.0032 6.50888 10.4835 8.02857C8.96381 9.54818 6.49117 9.54818 4.97143 8.02857Z"
              fill="black"
            />
            <path
              d="M5.3081 4.95944C5.23737 4.95944 5.16546 4.94554 5.09616 4.91626C4.8193 4.79909 4.68976 4.47964 4.80694 4.20273C5.54342 2.4623 7.5585 1.64554 9.29889 2.38202C9.57575 2.49919 9.70528 2.81864 9.5881 3.09555C9.47088 3.37245 9.15152 3.50189 8.87453 3.38476C7.6871 2.8823 6.31214 3.43958 5.80973 4.62701C5.72182 4.83468 5.52022 4.95944 5.3081 4.95944Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

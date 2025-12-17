export function formatRelativeDate(dateValue: string | number): string {
  if (typeof dateValue === "string") {
    return dateValue;
  }

  if (typeof dateValue === "number") {
    const date = new Date(dateValue * 1000);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} Days Ago`;
    return "This Week";
  }

  return "Unknown";
}

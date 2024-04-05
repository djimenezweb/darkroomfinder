export function formatDate(date: string | Date) {
  const formattedDate = new Date(date).toLocaleDateString();
  return formattedDate;
}

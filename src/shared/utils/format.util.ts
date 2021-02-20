export function formatNumber(value: number): string {
  if (!value) return '';
  return value.toLocaleString().replace(/[,.]/g, ' ');
}

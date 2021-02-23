export function formatNumber(value: number): string {
  if (!value) return '';
  return value.toLocaleString().replace(/[,.]/g, ' ');
}

export function generateUniqueId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

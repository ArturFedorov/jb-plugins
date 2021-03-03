export function formatNumber(value: number): string {
  if (!value) return '';
  return value.toLocaleString().replace(/[,.]/g, ' ');
}

export function generateUniqueId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

export const validURIRegExp = new RegExp(
  `^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$`,
  'i'
);

export function createArrayFromNumber(arrayLength: number) {
  return Array.from(Array(arrayLength).keys());
}

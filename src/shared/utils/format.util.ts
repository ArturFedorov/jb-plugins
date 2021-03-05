export function formatNumber(value: number): string {
  if (!value) return '';
  return value.toLocaleString().replace(/[,.]/g, ' ');
}

export function getIconUrl() {
  const iconUrls = [
    'https://plugins.jetbrains.com/files/1347/112132/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/14896/112074/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/6317/108259/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/8006/112162/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/11938/112167/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/16015/112806/icon/pluginIcon.svg',
    'https://plugins.jetbrains.com/files/4230/92719/icon/pluginIcon.svg'
  ];

  return iconUrls[randomInteger(1, iconUrls.length - 1)];
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

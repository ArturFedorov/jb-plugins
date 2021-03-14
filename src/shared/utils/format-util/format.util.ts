/**
 * Except anz number format it by digit groups
 * @param value
 * @returns formatted number as string 89098 => 89 098
 */
export function formatNumber(value: number): string {
  if (!value) return '';
  return value.toLocaleString().replace(/[,.]/g, ' ');
}

/**
 * Only for purpose of test task
 * test backend returns incorrect icon url
 * these are several random links to real plugin site
 */
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

/**
 * Used mostly for rendering lists/unique keys
 * @returns unique random id
 */
export function generateUniqueId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

/**
 * Regular expression for uri validation
 */
export const validURIRegExp = new RegExp(
  `^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$`,
  'i'
);

/**
 * Excepts even number n
 * @param arrayLength
 * @returns array of numbers from 0 to n
 */
export function createArrayFromNumber(arrayLength: number) {
  return Array.from(Array(arrayLength).keys());
}

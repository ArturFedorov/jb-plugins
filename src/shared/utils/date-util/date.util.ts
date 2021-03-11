export default function dateFormat(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // month returns array from 0 to 11
  const formattedDay = day > 9 ? day : `0${day}`;
  const formattedMonth = month > 9 ? month : `0${month}`;

  return `${formattedDay}.${formattedMonth}.${date.getFullYear()}`;
}

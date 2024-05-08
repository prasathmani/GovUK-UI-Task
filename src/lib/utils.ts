/**
 * The `dateFormat` function takes a Date object as input and returns a formatted string in the format
 * "dd/mm/yyyy".
 * @param {Date} date - The `date` parameter in the `dateFormat` function is expected to be a `Date`
 * object representing the date that you want to format.
 * @returns The `dateFormat` function is returning a formatted date string in the format "dd/mm/yyyy".
 */
export const dateFormat = (date: string): string => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm: string | number = today.getMonth() + 1;
  let dd: string | number = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${dd}/${mm}/${yyyy}`;
};

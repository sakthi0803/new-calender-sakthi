export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
};

export const parseDateString = (dateString) => {
  const [day, month, year, time] = dateString.split(/[\s-:]/);
  // Month is 0-based in JavaScript Date, so subtract 1
  return new Date(year, month - 1, day, ...time.split(":"));
};

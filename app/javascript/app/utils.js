export const debounce = (func, wait) => {
  let timeout;

  return function() {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const filterByValue = (array, string) =>
  array.filter(item => {
    const { avatar, ...rest } = item;
    return Object.keys(rest).some(key => item[key].toLowerCase().includes(string.toLowerCase()));
  });

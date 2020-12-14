export const debounce = (func, wait) => {
  let timeout;

  return function() {
    const later = () => {
      clearTimeout(timeout)
      func.apply(this, arguments)
    }
  clearTimeout(timeout)
  timeout = setTimeout(later, wait)
  }
}

export const filterByValue = (array, string) => {
  const peace = array.filter(o =>
      Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
  console.log('peace>>>>>', peace)
  return peace
}
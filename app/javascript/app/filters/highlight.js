export default (word, query, { className = '' }) => {
  const check = new RegExp(query, 'ig');
  return word
    .toString()
    .replace(check, matchedText => `<span class="${className}">${matchedText}</span>`);
};

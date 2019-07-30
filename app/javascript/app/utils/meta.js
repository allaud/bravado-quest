export const getMetaEnv = (name, defaultValue = null) => {
  const meta = document.querySelector(`meta[name="${name}"]`);
  return meta ? meta.content : defaultValue;
};

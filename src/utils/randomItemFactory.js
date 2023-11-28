export const getRandomItemFrom = (array) => {
  const max = array.length;
  const i = Math.floor(Math.random() * max);
  return array[i];
};

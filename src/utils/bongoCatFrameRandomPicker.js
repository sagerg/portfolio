export const pickARandomBongoCat = (bongoCatFrames) => {
  const max = bongoCatFrames.length;
  const index = Math.floor(Math.random() * max);
  return bongoCatFrames[index];
};

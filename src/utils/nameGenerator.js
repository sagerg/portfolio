import data from "../data/data.json";

export const generateARandomName = () => {
  const funnyNames = data["funny-names"];
  const max = funnyNames.length;
  const index = Math.floor(Math.random() * max);
  return funnyNames[index];
};

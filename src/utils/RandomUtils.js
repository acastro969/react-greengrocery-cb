export const generateRandomPrice = () => {
  return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
}
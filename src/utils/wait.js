const wait = async (time) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(true), time));

export { wait };

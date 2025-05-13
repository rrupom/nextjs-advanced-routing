export default async function wait(millisecond) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millisecond);
  });
}

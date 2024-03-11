export async function getData(url: string) {
  let result = await fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => new Error(err));
  return result;
}

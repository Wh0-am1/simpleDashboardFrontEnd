export async function signAPI(path, payload) {
  const data = await fetch("http://localhost:3000/api/v1" + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
    }),
  });
  return await data.json();
}

export async function signAPI(path, payload) {
  try {
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
  } catch (e) {
    console.error(e);
    return { success: false, message: "Network is not available" };
  }
}

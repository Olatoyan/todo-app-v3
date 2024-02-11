const API_URL = "http://127.0.0.1:8000/api/v1/todos";

export async function getTodos() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

export async function createTodo(name: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  const data = await response.json();
  return data;
}

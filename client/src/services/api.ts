const API_URL = "http://localhost:8000/api/v1/todos";

export async function getTodos() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
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

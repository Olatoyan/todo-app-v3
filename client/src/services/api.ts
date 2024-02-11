import { getTodoProps } from "../types/Types";

const API_URL = "http://127.0.0.1:8000/api/v1/todos";

export async function getTodos(): Promise<getTodoProps> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    console.log(error);
    throw new Error(); // Re-throw the error to handle it in the caller
  }
}

export async function createTodo(name: string) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message || "Failed to create todo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

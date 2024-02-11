import { getTodoProps } from "../types/Types";

const API_URL = "http://127.0.0.1:8000/api/v1/todos";

export async function getTodos(
  type: "all" | "active" | "completed",
): Promise<getTodoProps> {
  try {
    const response = await fetch(`${API_URL}/${type}`);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    console.log(error);
    throw error;
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
    throw error;
  }
}

export async function editTodo(id: number, name: string, completed: boolean) {
  try {
    const response = await fetch(API_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, completed }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to edit todo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error editing todo:", error);
    throw error;
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to edit todo");
    }

    console.log(response);

    return;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

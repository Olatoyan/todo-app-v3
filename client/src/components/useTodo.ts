import { getTodos } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useTodo() {
  const { id } = useParams<{ id: "all" | "active" | "completed" }>();
  console.log(id);

  const { data: allTodo, isPending } = useQuery({
    queryKey: ["todos", id || "all"],
    queryFn: () => getTodos(id || "all"),
  });

  return { allTodo, isPending };
}

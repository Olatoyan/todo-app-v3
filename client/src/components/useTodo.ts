import { getTodos } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export function useTodo() {
  const { data: allTodo, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return { allTodo, isPending };
}

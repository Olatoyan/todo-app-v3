import { useMutation } from "@tanstack/react-query";
import { editTodo as editTodoApi } from "../services/api";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
export function useEditTodo() {
  const queryClient = useQueryClient();
  const { mutate: editTodo, isPending: isUpdating } = useMutation({
    mutationFn: (data: { id: number; name: string; completed: boolean }) =>
      editTodoApi(data.id, data.name, data.completed),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success(`Your task has been renamed to "${data.todo.name}"`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { editTodo, isUpdating };
}

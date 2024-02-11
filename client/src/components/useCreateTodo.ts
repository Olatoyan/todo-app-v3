import { useMutation } from "@tanstack/react-query";
import { createTodo as createTodoApi } from "../services/api";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  const { mutate: createTodo, isPending: isCreating } = useMutation({
    mutationFn: (name: string) => createTodoApi(name),
    onSuccess: (data) => {
      const { name } = data.todo;
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      toast.success(`${name} has been added to your list`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createTodo, isCreating };
}

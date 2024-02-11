import { useMutation } from "@tanstack/react-query";
import { deleteTodo as deleteTodoApi } from "../services/api";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
    mutationFn: (id: number) => deleteTodoApi(id),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo has been deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteTodo, isDeleting };
}

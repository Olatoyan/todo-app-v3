import { useMutation } from "@tanstack/react-query";
import { deleteCompletedTodo as deleteCompletedTodoApi } from "../services/api";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteCompletedTodo(): {
  deleteCompletedTodo: () => void;
  isDeleting: boolean;
} {
  const queryClient = useQueryClient();
  const { mutate: deleteCompletedTodo, isPending: isDeleting } = useMutation({
    mutationFn: deleteCompletedTodoApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("All completed todo tasks have been deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteCompletedTodo, isDeleting };
}

export type getTodoProps = {
  status: string;
  results: number;
  todos: todoProps[];
};

type todoProps = {
  name: string;
  __id: number;
  completed: boolean;
};

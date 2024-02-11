export type getTodoProps = {
  status: string;
  results: number;
  todos: todoProps[];
};

type todoProps = {
  name: string;
  _id: number;
  completed: boolean;
};

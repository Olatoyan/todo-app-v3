import TodoHeader from "./TodoHeader";
import TodoInputField from "./TodoInputField";
import TodoList from "./TodoList";

function TodoContainer() {
  return (
    <div className="max-w-[60rem] -mt-[24rem] w-full space-y-10 mx-auto">
      <TodoHeader />
      <TodoInputField />
      <TodoList />
    </div>
  );
}

export default TodoContainer;

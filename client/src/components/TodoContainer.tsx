import TodoHeader from "./TodoHeader";
import TodoInputField from "./TodoInputField";
import TodoList from "./TodoList";
import MobileSummary from "./MobileSummary";

function TodoContainer() {
  return (
    <div className="tablet:-mt-[18rem] mx-auto -mt-[24rem] w-full max-w-[60rem] space-y-10 px-8 pb-10">
      <TodoHeader />
      <TodoInputField />
      <TodoList />
      <MobileSummary />
    </div>
  );
}

export default TodoContainer;

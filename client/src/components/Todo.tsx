import TodoContainer from "./TodoContainer";
import { useTodoContext } from "../contexts/todoContext";

import Header from "./Header";
function Todo() {
  const { isDarkMode } = useTodoContext();
  return (
    <main
      className={`${isDarkMode ? "bg-[#171823]" : "bg-white"} min-h-[100dvh]`}
    >
      <Header />
      <TodoContainer />
    </main>
  );
}

export default Todo;

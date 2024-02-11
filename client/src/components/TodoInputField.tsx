import { useState } from "react";
import { useCreateTodo } from "./useCreateTodo";
import { useTodoContext } from "../contexts/todoContext";
import MiniSpinner from "./MiniSpinner";

function TodoInputField() {
  const [value, setValue] = useState("");

  const { createTodo, isCreating } = useCreateTodo();
  const { isDarkMode } = useTodoContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
    setValue("");
  }

  return (
    <form
      className={`flex items-center justify-center gap-10 rounded-[0.5rem] px-8 py-9 shadow-white-sh ${isDarkMode ? "shadow-black-sh bg-[#25273d]" : "bg-white shadow-white-sh"}
      `}
      onSubmit={handleSubmit}
    >
      <button className="h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] bg-transparent"></button>
      <input
        placeholder="Create a new todo..."
        type="text"
        className={`w-full bg-transparent text-[1.8rem] font-normal tracking-[-0.025rem] focus:border-none focus:outline-none ${isDarkMode ? "text-[#c8cbe7] placeholder:text-[#767992]" : "text-[#393a4b] placeholder:text-[#9495a5]"}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isCreating}
      />
      {isCreating && <MiniSpinner />}
    </form>
  );
}

export default TodoInputField;

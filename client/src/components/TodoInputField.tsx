import { useState } from "react";
import { useCreateTodo } from "./useCreateTodo";

function TodoInputField() {
  const [value, setValue] = useState("");

  const { createTodo, isCreating } = useCreateTodo();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
  }

  return (
    <form
      className="bg-white flex items-center justify-center py-9 px-8 rounded-[0.5rem] shadow-white-sh gap-10"
      onSubmit={handleSubmit}
    >
      <button className="h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] bg-transparent"></button>
      <input
        placeholder="Create a new todo..."
        className="text-[#393a4b] placeholder:text-[#9495a5] text-[1.8rem] font-normal tracking-[-0.025rem] w-full focus:border-none focus:outline-none disabled:bg-red-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isCreating}
      />
    </form>
  );
}

export default TodoInputField;

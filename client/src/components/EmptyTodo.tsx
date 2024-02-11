import { useTodoContext } from "../contexts/todoContext";

function EmptyTodo() {
  const { isDarkMode } = useTodoContext();
  return (
    <div
      className={`${isDarkMode ? "bg-{#25273d] text-[#c5c6f6]" : "bg-white text-[#5b5e7e]"}`}
    >
      <p className="py-24 text-center text-[1.8rem] font-normal tracking-[-0.025rem]">
        It's quiet here without any tasks. Let's fill it up! 📝
      </p>
    </div>
  );
}

export default EmptyTodo;

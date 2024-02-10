function TodoInputField() {
  return (
    <form className="bg-white flex items-center justify-center py-9 px-8 rounded-[0.5rem] shadow-white-sh gap-10">
      <button className="h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] bg-transparent"></button>
      <input
        placeholder="Create a new todo..."
        className="text-[#9495a5] text-[1.8rem] font-normal tracking-[-0.025rem] w-full focus:border-none focus:outline-none"
      />
    </form>
  );
}

export default TodoInputField;

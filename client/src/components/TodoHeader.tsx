function TodoHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[4rem] font-bold tracking-[1.5rem] text-white">
        TODO
      </h1>
      <div>
        <button>
          <img src="./icon-moon.svg" alt="moon icon" />
        </button>
      </div>
    </div>
  );
}

export default TodoHeader;

function TodoSummaryBox() {
  return (
    <footer className="flex justify-between items-center py-11 px-8">
      <p className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        5 items left
      </p>

      <div className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5] flex gap-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <button className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoSummaryBox;

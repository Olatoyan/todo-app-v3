import { useState } from "react";

function TodoItems({ name, completed }: { name: string; completed: boolean }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <li className="flex items-center gap-10 py-9 px-10 border-b border-[#e3e4f1]">
      <button className="h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] bg-transparent"></button>

      <h2 className="text-[#494c6b] text-[1.8rem] font-normal tracking-[-0.025rem] w-full focus:border-none focus:outline-none">
        {name}
      </h2>
    </li>
  );
}

export default TodoItems;

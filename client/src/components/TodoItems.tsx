import { useState } from "react";
import { useEditTodo } from "./useEditTodo";

function TodoItems({
  id,
  name,
  completed,
}: {
  id: number;
  name: string;
  completed: boolean;
}) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [value, setValue] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const { editTodo, isUpdating } = useEditTodo();

  function handleEditTodo() {
    console.log(isCompleted);
    editTodo(
      { id, name: value, completed: isCompleted },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      },
    );
  }

  return (
    <>
      {isEditing ? (
        <div className="py-9 px-10 border-b border-[#e3e4f1] flex items-center justify-between">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="text-[1.8rem] font-normal tracking-[-0.025rem] border-0 focus:border-none focus:outline-0 w-[80%]"
          />

          <div className="flex gap-4">
            <button className="">
              <img
                src="./icon-update.svg"
                alt="update icon"
                onClick={handleEditTodo}
              />
            </button>
            <button className="" onClick={() => setIsEditing(!isEditing)}>
              <img src="./icon-cross.svg" alt="cross icon" />
            </button>
          </div>
        </div>
      ) : (
        <li className="flex items-center gap-10 py-9 px-10 border-b border-[#e3e4f1]">
          <button
            className={`h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] ${isCompleted ? "bg-red-500" : "bg-transparent"}`}
            onClick={() => {
              setIsCompleted(!isCompleted);
              handleEditTodo();
            }}
          ></button>

          <h2
            className={`text-[1.8rem] font-normal tracking-[-0.025rem] focus:border-none focus:outline-none ${isCompleted ? "line-through text-[#d1d2da]" : "text-[#494c6b]"}`}
          >
            {name}
          </h2>

          <button className="flex items-center gap-4 ml-auto">
            <img
              src="icon-edit.svg"
              alt="edit icon"
              className={`${isCompleted ? "hidden" : "block"}`}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            />
            <img src="icon-delete.svg" alt="delete icon" />
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItems;

import { useState, useRef, useEffect } from "react";
import { useEditTodo } from "./useEditTodo";
import { useDeleteTodo } from "./useDeleteTodo";
import MiniSpinner from "./MiniSpinner";
import { useTodoContext } from "../contexts/todoContext";

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
  const inputRef = useRef<HTMLInputElement>(null);

  const { editTodo, isUpdating } = useEditTodo();
  const { deleteTodo, isDeleting } = useDeleteTodo();
  const { isDarkMode } = useTodoContext();

  function handleEditTodo(updatedIsCompleted: boolean) {
    editTodo(
      { id, name: value, completed: updatedIsCompleted },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      },
    );
  }

  function handleDeleteTodo() {
    deleteTodo(id);
  }

  function handleToggleTodo() {
    setIsCompleted((prev) => !prev);
    handleEditTodo(!isCompleted);
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <>
      {isEditing ? (
        <form
          className={`flex items-center justify-between rounded-[0.5rem] border-b px-10 py-9 ${isDarkMode ? "border-[#393a4b] bg-white" : "border-[#e3e4f1] bg-[#a8a9b3]"}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleEditTodo(isCompleted);
          }}
        >
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-[80%] border-0 bg-transparent text-[1.8rem] font-normal tracking-[-0.025rem] focus:border-none focus:outline-0 ${isDarkMode ? "text-black" : "text-[#494c6b]"}`}
          />

          <div className="flex items-center gap-6">
            {isUpdating ? (
              <MiniSpinner />
            ) : (
              <>
                <button className="">
                  <img src="./icon-update.svg" alt="update icon" />
                </button>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setIsEditing(false);
                    setValue(name);
                  }}
                >
                  <img src="./icon-cross.svg" alt="cross icon" />
                </div>
              </>
            )}
          </div>
        </form>
      ) : (
        <li
          className={`tablet:px-5 flex items-center gap-10 border-b border-[#e3e4f1] px-10 py-9 ${isDarkMode ? "border-[#393a4b]" : "border-[#e3e4f1]"}`}
        >
          <button
            className={`relative h-[2.4rem] w-[2.62rem] rounded-full border border-[#e3e4f1] ${isCompleted ? "bg-check-gradient before:absolute before:left-[30%] before:top-[30%] before:h-[2rem] before:w-[2rem] before:content-[url(../icon-check.svg)]" : "bg-transparent"}`}
            onClick={handleToggleTodo}
          ></button>
          <h2
            className={`text-[1.8rem] font-normal tracking-[-0.025rem] focus:border-none focus:outline-none ${isCompleted ? "line-through" : ""} 
           
            ${isDarkMode && isCompleted ? "text-[#4d5067]" : isDarkMode && !isCompleted ? "text-[#c8cbe7]" : !isDarkMode && isCompleted ? "text-[#d1d2da]" : "text-[#494c6b]"}
            `}
          >
            {name}
          </h2>

          <button className="ml-auto flex items-center gap-4">
            {isDeleting ? (
              <MiniSpinner />
            ) : (
              <>
                <img
                  src="icon-edit.svg"
                  alt="edit icon"
                  className={`${isCompleted ? "hidden" : "block"}`}
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                />
                <img
                  src="icon-delete.svg"
                  alt="delete icon"
                  onClick={handleDeleteTodo}
                />
              </>
            )}
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItems;

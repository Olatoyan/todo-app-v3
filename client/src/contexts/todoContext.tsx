import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

type TodoContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
const TodoContext = createContext<TodoContextProps>(null!);

function TodoProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    setIsDarkMode(darkModeMediaQuery.matches);
  }, []);

  return (
    <TodoContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
}

export { TodoProvider, useTodoContext };

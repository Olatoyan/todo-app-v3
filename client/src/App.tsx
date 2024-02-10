import TodoContainer from "./components/TodoContainer";

import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;

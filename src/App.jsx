import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { getSubHeading } from "./utils/getSubHeading";


function App() {
  const [taskList, setTaskList] = useState([{text: "essa", id: 1}]);

  const addTask = (newTask) => {
    setTaskList((prevList) => [
      ...prevList,
      { text: newTask, id: prevList.length > 0 ? prevList.at(-1).id + 1 : 0 },
    ]);
  };

  function handleDelete(id) {
    const UpdatedList = taskList.filter((task) => task.id !== id);
    setTaskList(UpdatedList);
  }

  return (
    <div className="flex flex-col justify-center gap-10 rounded-xl bg-slate-100 p-10">
      <Header getSubHeading={getSubHeading(taskList.length)} addTask={addTask} taskList={taskList} />
      <div className="h-[2px] w-full rounded-full bg-gray-400"></div>
      <List tasks={taskList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

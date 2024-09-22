import { ListItem } from "./ListItem";

export function List({ tasks, handleDelete }) {
  const mapTasks = tasks.map((task) => {
    return <ListItem key={task.id} handleDelete={() => handleDelete(task.id)}>{task.text}</ListItem>;
  });

  return <ul>{mapTasks}</ul>;
}

import React, { useState, MouseEvent } from "react";

interface Task {
  todo: string;
}

const UseStateWithArrayOfObjects = () => {
  const INITIAL_TODO: Task = { todo: "" };

  const [task, setTask] = useState(INITIAL_TODO);
  // יכול להיות רק מערך ריק tasks-זה אומר ש <[] | Task[]> במידה ולא נוסיף את
  // Task יכול לקבל או מערך ריק או מערך מסוג  tasks-שורה זו אומרת ש
  const [tasks, setTasks] = useState<[] | Task[]>([]);

  type Event = MouseEvent<HTMLButtonElement>; // שפועל על איזשהו כפתור Mouse Event אירוע מסוג

  const createNewTask = (e: Event) => {
    e.preventDefault(); // שהיא שליחת הטופס וריפרוש של הדף form מבטל את ההתנהגות הדיפולטיבית של
    setTasks((prev) => [...prev, task]);
    return setTask(INITIAL_TODO);
  };

  return (
    <div>
      <form>
        <h5>
          Todo: <span style={{ fontWeight: "bolder" }}>{task.todo}</span>
        </h5>

        <input
          type="text"
          onChange={(e) =>
            setTask((prev) => ({ ...prev, todo: e.target.value }))
          }
          value={task.todo} // task.todo הערך של האלמנט יהיה הערך של
          placeholder="Enter todo"
        />
        <button onClick={createNewTask} disabled={!task.todo}>
          Create
        </button>
      </form>

      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {index + 1}. {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateWithArrayOfObjects;

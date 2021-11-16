import { useState } from 'react';

import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import TaskList from "./components/TaskList/TaskList";
import UserIcon from "./components/UserIcon/UserIcon";
import React from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks(prevState => {
      return [
        task,
        ...prevState,
      ];
    });
  };

  const completeTask = task => {
    setTasks(prevState => {
      const taskIndex = prevState.findIndex(t => t.text === task.text);
      return prevState.filter((task, i) => i !== taskIndex);
    });
  };

  return (
    <>
      <Header>
        <Logo />
        <UserIcon name="Pissuti" />
      </Header>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
    </>
  );
}

export default App;

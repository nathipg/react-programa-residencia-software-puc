import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskList from './components/TaskList/TaskList';
import UserIcon from './components/UserIcon/UserIcon';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks(prevState => {
      return [task, ...prevState];
    });
  };

  const completeTask = task => {
    setTasks(prevState => prevState.map(t => t.id === task.id ? {...t, done: true} : t));
  };

  const removeTask = task => {
    setTasks(prevState => prevState.filter(t => t.id !== task.id));
  };

  return (
    <>
      <Header>
        <Logo />
        <UserIcon name="Pissuti" />
      </Header>
      <Routes>
        <Route path="/" exact element={
          <>
            <AddTask addTaskHandler={addTask} />
            <TaskList tasks={tasks} completeTaskHandler={completeTask} />
          </>
        } />
        <Route path="task/:id" element={<TaskDetails tasks={tasks} completeTaskHandler={completeTask} removeTaskHandler={removeTask} />} />
      </Routes>
    </>
  );
};

export default App;

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AddTask from './components/AddTask/AddTask';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Pills from './components/Pills/Pills';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskList from './components/TaskList/TaskList';
import UserIcon from './components/UserIcon/UserIcon';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState(1);

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

  const changeTab = tab => {
    setTab(tab);
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
            <Pills>
              <Button
                type="button"
                variant={tab === 1 ? 'primary' : 'secondary'}
                clickHandler={() => changeTab(1)}>PENDING</Button>
              <Button
                type="button"
                variant={tab === 2 ? 'primary' : 'secondary'}
                clickHandler={() => changeTab(2)}>Done</Button>
            </Pills>
            <TaskList 
              tasks={tasks} 
              done={tab === 2} 
              completeTaskHandler={completeTask} />
          </>
        } />
        <Route path="task/:id" element={<TaskDetails tasks={tasks} completeTaskHandler={completeTask} removeTaskHandler={removeTask} />} />
      </Routes>
    </>
  );
};

export default App;

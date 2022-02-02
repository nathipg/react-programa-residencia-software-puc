import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import AddTask from './components/AddTask/AddTask';
import Button from './components/Button/Button';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Logo from './components/Logo/Logo';
import Pills from './components/Pills/Pills';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskList from './components/TaskList/TaskList';
import UserIcon from './components/UserIcon/UserIcon';

const App = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const addTask = async taskData => {
    const response = await fetch('http://localhost:3001/task', {
      method: 'POST',
      body: JSON.stringify(taskData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const task = await response.json();

    setTasks(prevState => {
      return [task, ...prevState];
    });
  };

  const completeTask = async task => {
    task.done = true;

    const response = await fetch(`http://localhost:3001/task/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response.status === 200) {
      setTasks(prevState => prevState.map(t => t.id === task.id ? {...t, done: true} : t));
    }
  };

  const removeTask = async task => {
    const response = await fetch(`http://localhost:3001/task/${task.id}`, {
      method: 'DELETE',
    });

    if(response.status === 200) {
      setTasks(prevState => prevState.filter(t => t.id !== task.id));
    } else {
      setError('Could not delete task :(');
    }

    navigate('/');
  };

  const changeTab = tab => {
    setTab(tab);
  };

  const fetchTasksHandler = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/task', {
        method: 'GET',
      });
      const taskList = await res.json();
      setTasks(taskList);
      setLoading(false);
      setError('');
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError('Could not load tasks :(');
    }
  }, []);

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler]);

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
            <Button
              type="button"
              clickHandler={fetchTasksHandler}>Load tasks</Button>
            <Pills>
              <Button
                type="button"
                variant={tab === 1 ? 'primary' : 'secondary'}
                clickHandler={() => changeTab(1)}>Pending</Button>
              <Button
                type="button"
                variant={tab === 2 ? 'primary' : 'secondary'}
                clickHandler={() => changeTab(2)}>Done</Button>
            </Pills>
            { loading && <Loading /> }
            { !loading && error && <Error msg={error} /> }
            {
              !loading &&
              <TaskList
                tasks={tasks}
                done={tab === 2}
                completeTaskHandler={completeTask} />
            }
          </>
        } />
        <Route path="task/:id" element={<TaskDetails tasks={tasks} completeTaskHandler={completeTask} removeTaskHandler={removeTask} />} />
      </Routes>
    </>
  );
};

export default App;

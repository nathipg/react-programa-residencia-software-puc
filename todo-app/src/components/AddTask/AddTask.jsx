import { useState } from 'react';

import './AddTask.css';

const AddTask = ({onAddTask}) => {
  const initialState = {
    text: '',
  };
  const [task, setTask] = useState(initialState);

  const taskChangeHandler = event => {
    setTask(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };

  const submitHandler = event => {
    event.preventDefault();
    onAddTask(task);
    setTask(initialState);
  };

  return (
    <form className="AddTask" onSubmit={submitHandler}>
      <input
        type="text" 
        name="text"
        placeholder="Task"
        className="AddTask__input"
        value={task.text}
        onChange={taskChangeHandler}
        required />
      <button 
        type="submit"
        className="AddTask__button">Add Task</button>
    </form>
  );
};

export default AddTask;
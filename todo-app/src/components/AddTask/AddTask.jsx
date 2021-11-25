import { useState } from 'react';
import Button from '../Button/Button';

import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

import './AddTask.css';

const AddTask = ({addTaskHandler}) => {
  const initialTaskState = {
    title: '',
    description: '',
  };
  const initialFormState = {
    isValid: true
  };

  const [task, setTask] = useState(initialTaskState);
  const [formState, setFormState] = useState(initialFormState);

  const taskChangeHandler = event => {
    setTask(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };

  const submitHandler = event => {
    event.preventDefault();

    if(task.title.trim() === '') {
      setFormState(prevState => ({...prevState, isValid: false}));
      return;
    }

    setFormState(prevState => ({...prevState, isValid: true}));

    task.id = Math.random(); // Demo purpose only

    addTaskHandler(task);
    setTask(initialTaskState);
  };

  return (
    <form className="AddTask" onSubmit={submitHandler}>
      <Input
        type="text" 
        name="title"
        placeholder="Task"
        value={task.title}
        valid={formState.isValid}
        errorMessage="Please, add a task title"
        changeHandler={taskChangeHandler} />
      <TextArea
        name="description"
        placeholder="Description"
        value={task.description}
        changeHandler={taskChangeHandler} />
      <Button
        type="submit">Add Task</Button>
    </form>
  );
};

export default AddTask;
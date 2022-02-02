import { useState } from 'react';
import Button from '../Button/Button';

import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

import './AddTask.css';

const AddTask = ({addTaskHandler}) => {
  const initialTaskState = {
    title: '',
    date: '',
    description: '',
    done: false,
  };
  const initialFormState = {
    isValid: true,
    fieldsStatus: {
      title: true,
      date: true,
    },
  };

  const [task, setTask] = useState(initialTaskState);
  const [formState, setFormState] = useState(initialFormState);

  const taskChangeHandler = event => {
    setTask(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };

  const submitHandler = event => {
    event.preventDefault();

    let isValid = true;
    const updatedFieldsStatus = {
      title: true,
      date: true,
    };

    if(task.title.trim() === '') {
      updatedFieldsStatus.title = false;
      isValid = false;
    }

    if(task.date.trim() !== '') {
      if(!task.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        updatedFieldsStatus.date = false;
        isValid = false;
      }
    }

    setFormState(prevState => ({
      ...prevState,
      isValid,
      fieldsStatus: updatedFieldsStatus
    }));

    if(!isValid) {
      return;
    }

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
        valid={formState.fieldsStatus.title}
        errorMessage="Please, add a task title"
        changeHandler={taskChangeHandler} />
      <Input
        type="date" 
        name="date"
        placeholder="YYYY-mm-dd"
        value={task.date}
        valid={formState.fieldsStatus.date}
        errorMessage="Please, add a valid date (YYYY-mm-dd)"
        changeHandler={taskChangeHandler} />
      <TextArea
        name="description"
        placeholder="Description"
        value={task.description}
        changeHandler={taskChangeHandler} />
      <Button
        type="submit">Add</Button>
    </form>
  );
};

export default AddTask;
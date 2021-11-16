import './AddTask.css';

const AddTask = () => {
  return (
    <form className="AddTask">
      <input
        type="text" 
        name="task"
        placeholder="Task"
        className="AddTask__input" />
      <button 
        type="submit"
        className="AddTask__button">Add Task</button>
    </form>
  );
};

export default AddTask;
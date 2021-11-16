import './Task.css';

const Task = ({task, onCompleteTask}) => {
  return (
    <div className="Task">
      <p className="Task__text">{task.text}</p>
      <button className="Task__button" onClick={() => onCompleteTask(task)}></button>
    </div>
  );
};

export default Task;
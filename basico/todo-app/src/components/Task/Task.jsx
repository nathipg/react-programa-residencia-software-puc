import { useNavigate } from 'react-router-dom';

import './Task.css';

const Task = ({task, completeTaskHandler}) => {
  const navigate = useNavigate();

  const clickHandler = event => {
    if(!event.target.classList.contains('Task__button')) {
      navigate(`/task/${task.id}`);
    }
  };

  return (
    <div className="Task" onClick={clickHandler}>
      <p className="Task__text">{task.title}</p>
      {
        !task.done &&
        <button className="Task__button" onClick={() => completeTaskHandler(task)}></button>
      }
    </div>
  );
};

export default Task;
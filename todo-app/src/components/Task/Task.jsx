import './Task.css';

const Task = ({text}) => {
  return (
    <div className="Task">
      <p className="Task__text">{text}</p>
      <button className="Task__button"></button>
    </div>
  );
};

export default Task;
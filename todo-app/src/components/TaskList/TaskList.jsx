import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({tasks, completeTaskHandler}) => {
  const renderNoTasks = () => {
    return (
      <p>Nothing to do today, have fun!</p>
    );
  };
  return (
    <div className="TaskList">
      {
        tasks.length === 0 ?
        renderNoTasks()
        : tasks.map((task, i) => <Task key={i} task={task} completeTaskHandler={completeTaskHandler} />)}
    </div>
  );
};

export default TaskList;
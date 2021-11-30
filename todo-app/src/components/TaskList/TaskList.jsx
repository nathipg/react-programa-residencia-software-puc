import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({tasks, completeTaskHandler}) => {
  const renderTasks = () => {
    const tasksPending = tasks.filter(task => !task.done);
    return (
      tasksPending.length === 0 ?
        <p>Nothing to do today, have fun!</p>
        : tasks.map((task, i) => !task.done && <Task key={i} task={task} completeTaskHandler={completeTaskHandler} />)
    );
  };
  return (
    <div className="TaskList">
      {renderTasks()}
    </div>
  );
};

export default TaskList;
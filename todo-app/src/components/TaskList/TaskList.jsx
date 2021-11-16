import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({tasks, onCompleteTask}) => {
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
        : tasks.map((task, i) => <Task key={i} task={task} onCompleteTask={onCompleteTask} />)}
    </div>
  );
};

export default TaskList;
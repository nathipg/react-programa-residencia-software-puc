import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({tasks, done, completeTaskHandler}) => {
  const renderTasks = () => {
    const tasksFiltered = tasks.filter(task => task.done === done);
    const tasksByDate = {};
    let tasksJsx = [];

    tasksFiltered.forEach(t => {
      if(!tasksByDate.hasOwnProperty(t.date)) {
        tasksByDate[t.date] = [];
      }

      tasksByDate[t.date].push(t);
    });

    const dates = Object.keys(tasksByDate);
    const datesSorted = dates.sort();

    datesSorted.forEach(date => {
      tasksJsx.push(<h2 key={date} className="TaskList__date">{date === '' ? 'Unscheduled' : date}</h2>);
      tasksByDate[date].forEach(t => {
        tasksJsx.push(<Task key={t.id} task={t} completeTaskHandler={completeTaskHandler} />);
      });
    });

    return (
      tasksFiltered.length === 0 ?
        <p>Nothing to do today, have fun!</p>
        : tasksJsx
    );
  };
  return (
    <div className="TaskList">
      {renderTasks()}
    </div>
  );
};

export default TaskList;
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

import './TaskDetails.css';

const TaskDetails = ({tasks, completeTaskHandler, removeTaskHandler}) => {
  const navigate = useNavigate();
  const params = useParams();
  const taskId = +params.id;
  const task = tasks.find(t => t.id === taskId);

  const clickComplete = () => {
    completeTaskHandler(task);
  };

  const clickRemove = () => {
    completeTaskHandler(task);
    navigate('/');
  };
  
  return (
    !task ?
      <Navigate replace to="/" /> :
      <div className="TaskDetails">
        <Button
          type="button"
          variant="secondary"
          clickHandler={() => navigate('/')}>Voltar</Button>
        <div className="info">
          <header>
            <h1>{task.title}</h1>
            <span className={task.done ? 'done' : null}>({task.done ? 'DONE' : 'PENDING'})</span>
          </header>
          <section>
            <Input
              type="text" 
              name="date"
              value={task.date}
              valid={true}
              errorMessage="Please, add a valid date (YYYY-mm-dd)"
              readOnly={true} />
            <TextArea
              value={task.description}
              readOnly={true} />
            <div className="TaskDetails__actions">
              <Button
                type="button"
                clickHandler={clickComplete}>Complete Task</Button>
              <Button
                type="button"
                variant="secondary"
                clickHandler={clickRemove}>Remove Task</Button>
            </div>
          </section>
        </div>
      </div>
  );
};

export default TaskDetails;
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';

import './TaskDetails.css';

const TaskDetails = ({tasks, completeTaskHandler}) => {
  const navigate = useNavigate();
  const params = useParams();
  const task = tasks.find(t => t.id == params.id);

  const clickHandler = () => {
    completeTaskHandler(task);
    navigate('/');
  }
  
  return (
    !task ?
      <Navigate replace to="/" /> :
      <div className="TaskDetails">
        <Button
          type="button"
          variant="secondary"
          clickHandler={() => navigate('/')}>Voltar</Button>
        <div className="info">
          <h1>{task.title}</h1>
          <TextArea
            value={task.description}
            readOnly={true} />
          <div className="TaskDetails__actions">
            <Button
              type="button"
              clickHandler={clickHandler}>Complete Task</Button>
            <Button
              type="button"
              variant="secondary"
              clickHandler={clickHandler}>Remove Task</Button>
          </div>
        </div>
      </div>
  );
};

export default TaskDetails;
import './UserIcon.css';

const UserIcon = ({name}) => {
  return (
    <div className="UserIcon">
      <div className="UserIcon__icon">{name[0]}</div>
      <span className="UserIcon__name">{name}</span>
    </div>
  )
};

export default UserIcon;
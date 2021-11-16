import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import TaskList from "./components/TaskList/TaskList";
import UserIcon from "./components/UserIcon/UserIcon";

const App = () => {
  return (
    <>
      <Header>
        <Logo />
        <UserIcon name="Pissuti" />
      </Header>
      <AddTask />
      <TaskList />
    </>
  );
}

export default App;

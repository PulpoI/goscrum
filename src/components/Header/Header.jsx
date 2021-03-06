import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const { tasks } = useSelector((state) => {
    return state.tasksReducer;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <div className="wrapper_right_header">
        <div>Tareas creadas: {tasks?.length}</div>
        <div>{localStorage.getItem("userName")}</div>
        <div onClick={handleLogout}>x</div>
      </div>
    </header>
  );
};

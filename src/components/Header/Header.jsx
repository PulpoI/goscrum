import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <img src="/img/logo.png" alt="logo" />
      <div className="wrapper_right_header">
        <div>{localStorage.getItem("userName")}</div>
        <div onClick={handleLogout}>x</div>
      </div>
    </header>
  );
};

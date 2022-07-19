import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <img src="/img/logo.png" alt="logo" />

      <div onClick={handleLogout}>x</div>
    </header>
  );
};

import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

import "../Auth.styles.css";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "El email es requerido.";
    }

    if (!values.password) {
      errors.password = "El password es requerido.";
    }

    return errors;
  };

  const onSubmit = () => {
    localStorage.setItem("logged", "yes");
    navigate("/", { replace: true });
  };

  const formik = useFormik({ initialValues, validate, onSubmit });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <div>{errors.email} </div>}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <div>{errors.password} </div>}
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
        <div>
          <Link to="/register">Registrarme</Link>
        </div>
      </form>
    </div>
  );
}

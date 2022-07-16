import React from "react";
import { useFormik } from "formik";

export const Login = () => {
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
  };

  const formik = useFormik({ initialValues, validate, onSubmit });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="container">
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
      </form>
    </div>
  );
};

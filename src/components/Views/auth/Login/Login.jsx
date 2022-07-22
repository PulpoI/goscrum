import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

import { swal } from "../../../../utils/swal";

import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    password: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(4, "La cantidad mínima de caracteres es 4")
      .required(required),
    password: Yup.string().required(required),
  });

  const onSubmit = () => {
    const { userName, password } = values;

    fetch(`https:${API_ENDPOINT}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          localStorage.setItem("token", data?.result?.token);
          localStorage.setItem("userName", data?.result?.user.userName);
          navigate("/", { replace: true });
        } else {
          swal();
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
            className={errors.userName && touched.userName ? "error" : ""}
          />
          {errors.userName && touched.userName && (
            <span className="error-message">{errors.userName} </span>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && touched.password ? "error" : ""}
          />
          {errors.password && touched.password && (
            <span className="error-message">{errors.password} </span>
          )}
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

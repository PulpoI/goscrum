import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Switch, FormControlLabel } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

import "../Auth.styles.css";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export default function Register() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https:${API_ENDPOINT}auth/data`)
      .then((response) => response.json())
      .then((data) => setData(data.result));
  }, []);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
    switch: false,
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(4, "La cantidad mínima de caracteres es 4")
      .required(required),
    password: Yup.string().required(required),
    email: Yup.string().email("Debe ser un mail válido").required(required),
    role: Yup.string().required(required),
    continent: Yup.string().required(required),
    region: Yup.string().required(required),
  });

  const handleChangeContinent = (value) => {
    setFieldValue("continent", value);
    if (value !== "America") setFieldValue("region", "Otro");
  };

  const onSubmit = () => {
    const teamID = !values.teamID ? uuidv4() : values.teamID;
    fetch(`https:${API_ENDPOINT}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          teamID,
          role: values.role,
          continent: values.continent,
          region: values.region,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        navigate("/registered/" + data?.result?.user?.teamID, { replace: true })
      );
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    setFieldValue,
  } = formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
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
            <span className="error-message">{errors.userName}</span>
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
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && touched.email ? "error" : ""}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <FormControlLabel
          control={
            <Switch
              value={values.switch}
              onChange={() =>
                formik.setFieldValue("switch", !formik.values.switch)
              }
              name="switch"
              color="secondary"
            />
          }
          label="Perteneces a un equipo ya creado"
        />
        {values.switch && (
          <div>
            <label>Por favor, introduce el identificador de equipo</label>
            <input
              type="text"
              name="teamID"
              value={values.teamID}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label>Rol</label>
          <select
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            className={errors.role && touched.role ? "error" : ""}
          >
            <option value="">Seleccionar rol...</option>
            {data?.Rol?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
            {/* <option value="Team Leader">Team Leader</option>
            <option value="Team Member">Team Member</option> */}
          </select>

          {errors.role && touched.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>
        <div>
          <label>Continente</label>
          <select
            name="continent"
            onChange={(event) =>
              handleChangeContinent(event.currentTarget.value)
            }
            onBlur={handleBlur}
            value={values.continent}
            className={errors.continent && touched.continent ? "error" : ""}
          >
            <option value="">Seleccionar continente...</option>
            {data?.continente?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
            {/* <option value="America">America</option>
            <option value="Europa">Europa</option>
            <option value="Otro">Otro</option> */}
          </select>

          {errors.continent && touched.continent && (
            <span className="error-message">{errors.continent}</span>
          )}
        </div>
        {values.continent === "America" && (
          <div>
            <label>Región</label>
            <select
              name="region"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.region}
              className={errors.region && touched.region ? "error" : ""}
            >
              <option value="">Seleccionar región...</option>
              {data?.region?.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
              {/* <option value="Latam">Latam</option>
              <option value="Brasil">Brasil</option>
              <option value="America del Norte">America del Norte</option>
              <option value="Otro">Otro</option> */}
            </select>

            {errors.region && touched.region && (
              <span className="error-message">{errors.region}</span>
            )}
          </div>
        )}

        <div>
          <button type="submit">Registrarme</button>
        </div>
        <div>
          <Link to="/login">Ir a iniciar sesión</Link>
        </div>
      </form>
    </div>
  );
}

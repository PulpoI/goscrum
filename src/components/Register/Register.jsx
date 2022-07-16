import React from "react";
import { useFormik } from "formik";

export const Register = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, onSubmit });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={values.userName}
          />
          {errors.userName && <div>{errors.userName} </div>}
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
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <div>{errors.email} </div>}
        </div>
        <input
          type="hidden"
          name="teamID"
          value="9dacagsadas-fasdsa-123213-321312-asffasfasfasada"
        />
        <div>
          <label>Rol</label>
          <select name="role" onChange={handleChange} value={values.role}>
            <option value="Team Member">Team Member</option>
            <option value="Team Leader">Team Leader</option>
          </select>

          {errors.role && <div>{errors.role} </div>}
        </div>
        <div>
          <label>Continente</label>
          <select
            name="continent"
            onChange={handleChange}
            value={values.continent}
          >
            <option value="America">America</option>
            <option value="Europa">Europa</option>
            <option value="Otro">Otro</option>
          </select>

          {errors.continent && <div>{errors.continent} </div>}
        </div>
        <div>
          <label>Región</label>
          <select name="region" onChange={handleChange} value={values.region}>
            <option value="Latam">Latam</option>
            <option value="Brasil">Brasil</option>
            <option value="America del Norte">America del Norte</option>
            <option value="Otro">Otro</option>
          </select>

          {errors.region && <div>{errors.region} </div>}
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
};

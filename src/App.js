import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import Registered from "./components/Views/Registered/Registered";
const Error404 = lazy(() => import("./components/Views/Error404/Error404"));
const Login = lazy(() => import("./components/Views/auth/Login/Login"));
const Tasks = lazy(() => import("./components/Views/Tasks/Tasks"));
const Register = lazy(() =>
  import("./components/Views/auth/Register/Register")
);

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
export const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Tasks />
                </Suspense>
              </motion.div>
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          exact
          path="/registered/:teamID"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Registered />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Register />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

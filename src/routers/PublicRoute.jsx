import { Navigate } from "react-router-dom";
export function PublicRoute({ component: Component }) {
    const isAuth=true //kostil
  return (
    <>
      <Component />
    </>
  );
};


// {isAuth ? <Navigate to="/" /> : <Component />}
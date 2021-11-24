
import { Navigate } from "react-router-dom";
export function PrivateRoute({  component: Component }) {
    const isAuth=true //kostil
  return (
    <>
      {isAuth ? <Component /> : <Navigate to="/login" />}
    </>
  );
};



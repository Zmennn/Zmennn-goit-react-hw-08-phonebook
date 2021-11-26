import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Registration/Login';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from './routers/PrivateRoute';
import { PublicRoute } from './routers/PublicRoute';
import { PhonePage } from './pages/PhonePage.jsx';
import { fetchCurrentUser } from './redux/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchCurrentUser(localStorage.getItem('token')));
    }
  }, []);

  return (
    <>
      <AppBar />

      <main>
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute component={Registration} />}
          />

          <Route path="/login" element={<PublicRoute component={Login} />} />

          <Route
            path="/contacts"
            element={<PrivateRoute component={PhonePage} />}
          />
        </Routes>
      </main>
    </>
  );
}

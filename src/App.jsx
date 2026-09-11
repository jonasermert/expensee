
import './App.scss';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import PrivateRoute from './contexts/ProtectedRoute';

const Add = lazy(() => import('./pages/Add/Add'));
const Charts = lazy(() => import('./pages/Charts/Charts'));
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/login'));
const Register = lazy(() => import('./pages/Register/register'));
const Welcome = lazy(() => import('./pages/Login/welcome'));

export default function App() {
  const { currentUser, appIsReady } = useAuth();

  if (!appIsReady) {
    return <div className="app-loading" role="status">Expensee wird geladen …</div>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="app-loading" role="status">Ansicht wird geladen …</div>}>
        <Routes>
          <Route path="/" element={currentUser ? <Welcome /> : <Login />} />
          <Route path="/register" element={currentUser ? <Navigate to="/" replace /> : <Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Charts />} />
            <Route path="/charts" element={<Home />} />
            <Route path="/add" element={<Add />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

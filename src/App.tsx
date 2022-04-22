import { Dashboard } from './pages/Dashboard';
import { Routes, Route } from "react-router-dom";
import { PageLayout } from './components/PageLayout';
import { Tables } from './pages/Tables';
import { Billing } from './pages/Billing';
import { Profile } from './pages/Profile';
import { OnlyNavbar } from './components/PageLayout/OnlyNavbar';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AuthContextProvider } from './Contexts/AuthContext';

export function App() {

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        <Route path='*' element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='tables' element={<Tables />} />
            <Route path='billing' element={<Billing />} />
          </Route>

          <Route element={<OnlyNavbar />}>
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}

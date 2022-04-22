import { Dashboard } from './pages/Dashboard';
import { Routes, Route } from "react-router-dom";
import { PageLayout } from './components/PageLayout';
import { Tables } from './pages/Tables';
import { Billing } from './pages/Billing';
import { Profile } from './pages/Profile';
import { OnlyNavbar } from './components/PageLayout/OnlyNavbar';
import { PrivateRoute } from './Routes/PrivateRoute';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { AuthContextProvider } from './Contexts/AuthContext';

export function App() {

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<SignUp />} />

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

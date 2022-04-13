import { Dashboard } from './pages/Dashboard';
import { Routes, Route,  } from "react-router-dom";
import { PageLayout } from './components/PageLayout';
import { Tables } from './pages/Tables';
import { Billing } from './pages/Billing';

export function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='tables' element={<Tables />} />
        <Route path='billing' element={<Billing />} />
      </Route>
    </Routes>
  )
}

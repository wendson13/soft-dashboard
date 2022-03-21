import { Dashboard } from './pages/Dashboard';
import { Routes, Route,  } from "react-router-dom";
import { PageLayout } from './components/PageLayout';

export function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

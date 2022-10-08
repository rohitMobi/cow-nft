import {  Routes, Route, Navigate  } from 'react-router-dom';
import DashboardComp from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardComp />} />
      </Routes>
    </>
  );
}

export default App;

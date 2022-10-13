import {  Routes, Route, Navigate  } from 'react-router-dom';
import ClaimComp from './pages/Claim';
import DashboardComp from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardComp />} />
        <Route path="/claim" element={<ClaimComp />} />
      </Routes>
    </>
  );
}

export default App;

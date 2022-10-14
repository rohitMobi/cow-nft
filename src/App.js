import {  Routes, Route, Navigate  } from 'react-router-dom';
import ClaimComp from './pages/Claim';
import DashboardComp from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardComp />} />
        <Route path="/claim" element={<ClaimComp />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VeterinaryClinicDashboard from './components/VeterinaryClinicDashboard';
import ReservationPage from './pages/ReservationPage'; // Placez le fichier dans le dossier components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VeterinaryClinicDashboard />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
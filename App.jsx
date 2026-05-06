import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventographyLanding from './components/Eventography';
import Home from './components/Home'; // Your main portfolio page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventography" element={<EventographyLanding />} />
        {/* Add future clients here */}
        <Route path="/next-client" element={<NextClientComponent />} />
      </Routes>
    </Router>
  );
}

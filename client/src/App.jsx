import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/layout/MainLayout.jsx';
import { PageTransition } from './components/animations/index.jsx';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Pathaways from './pages/Pathaways.jsx';
import PathwayDetail from './pages/PathwayDetail.jsx';
import Simulations from './pages/Simulations.jsx';
import SimulationDetail from './pages/simulations/SimulationDetail.jsx';
import Pods from './pages/Pods.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <MainLayout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/simulations/:slug" element={<SimulationDetail />} />
            <Route path="/pathaways" element={<Pathaways />} />
            <Route path="/pathway/:id" element={<PathwayDetail />} />
            <Route path="/pods" element={<Pods />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </MainLayout>
  );
}

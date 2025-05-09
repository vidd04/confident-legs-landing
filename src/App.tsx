import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for code splitting
const Index = lazy(() => import('./pages/Index'));
// const Contact = lazy(() => import('./pages/Contact')); // Commented out for later use
const Conditions = lazy(() => import('./pages/Conditions'));
const Treatments = lazy(() => import('./pages/Treatments'));
const LocationsYonkersNY = lazy(() => import('./pages/LocationsYonkersNY'));

const App = () => {
  return (
    <ErrorBoundary>
      <div className="scale-wrapper">
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/conditions" element={<Conditions />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/locations/yonkers-ny" element={<LocationsYonkersNY />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;

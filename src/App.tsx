import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { CertificatesPage } from './pages/Certificates';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
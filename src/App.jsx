import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Manifesto from './components/Manifesto';
import Research from './components/Research';
import Careers from './components/Careers';
import "./styles/custom.css"
import "./styles/styles.css"
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import ThankYou from './components/ThankYou';
import Terms from './components/Terms';
import RequestInvite from './components/RequestInvite';
import PlayTheRules from './components/PlayTheRules';
import Privacy from './components/Privacy';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/manifesto" element={<Layout><Manifesto /></Layout>} />
        <Route path="/research" element={<Layout><Research /></Layout>} />
       <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/rules" element={<Layout><PlayTheRules /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/request-invite" element={<Layout><RequestInvite /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYou /></Layout>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


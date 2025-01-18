import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Manifesto from "./components/Manifesto";
import Research from "./components/Research";
import "./styles/custom.css";
import "./styles/styles.css";
import Layout from "./components/Layout";
import ThankYou from "./components/ThankYou";
import Terms from "./components/Terms";
import RequestInvite from "./components/RequestInvite";
import PlayTheRules from "./components/PlayTheRules";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import { Bounce, ToastContainer, toast } from "react-toastify";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/manifesto"
          element={
            <Layout>
              <Manifesto />
            </Layout>
          }
        />
        <Route
          path="/research"
          element={
            <Layout>
              <Research />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        <Route
          path="/rules"
          element={
            <Layout>
              <PlayTheRules />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/request-invite"
          element={
            <Layout>
              <RequestInvite />
            </Layout>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Layout>
              <ThankYou />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Router>
  );
}

export default App;

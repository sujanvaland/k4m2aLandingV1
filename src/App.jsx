import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Bounce, ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingSpinner } from "./components/Layout";
import { initializeScripts } from "./utils/scriptLoader";
import Profile from "./components/profile/index";

// Lazy load route components with prefetch
const lazyLoad = (importFunc) => {
  const Component = lazy(importFunc);
  Component.preload = importFunc;
  return Component;
};

// Lazy load route components
const Home = lazyLoad(() => import("./components/Home"));
const Manifesto = lazyLoad(() => import("./components/Manifesto"));
const Research = lazyLoad(() => import("./components/Research"));
const ThankYou = lazyLoad(() => import("./components/ThankYou"));
const Terms = lazyLoad(() => import("./components/Terms"));
const RequestInvite = lazyLoad(() => import("./components/RequestInvite"));
const RequestInviteCreator = lazyLoad(
  () => import("./components/RequestInviteCreator"),
);
const PlayTheRules = lazyLoad(() => import("./components/PlayTheRules"));
const Privacy = lazyLoad(() => import("./components/Privacy"));
const NotFound = lazyLoad(() => import("./components/NotFound"));
const SignIn = lazyLoad(() => import("./components/SignIn"));
const BugReportForm = lazyLoad(() => import("./components/ReportABug"));
const Career = lazyLoad(() => import("./components/Career"));
const CareerDetails = lazyLoad(() => import("./components/CareerDetails"));
const Security = lazyLoad(() => import("./components/Security"));
const Whatisk4m2a = lazyLoad(() => import("./components/Whatisk4m2a"));
const Blog = lazyLoad(() => import("./components/Blog"));
const BlogDetails = lazyLoad(() => import("./components/BlogDetails"));
const ContactUs = lazyLoad(() => import("./components/ContactUs"));
const Pricing = lazyLoad(() => import("./components/Pricing"));
const Support = lazyLoad(() => import("./components/Support"));
const Post = lazyLoad(() => import("./components/post/Post"));
const Downloadapp = lazyLoad(() => import("./components/Downloadapp"));
const Qrpage = lazyLoad(() => import("./components/Qrpage"));
const Analytics = lazyLoad(() => import("./components/Analytics"));

// Prefetch routes on hover
const prefetchRoute = (route) => {
  const component = route.preload;
  if (component) {
    component();
  }
};

function App() {
  useEffect(() => {
    // Initialize script loading
    initializeScripts();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
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
            path="/qrpage"
            element={
              <Layout>
                <Qrpage />
              </Layout>
            }
          />
          <Route
            path="/:encodedUserName"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/analytics"
            element={
              <Layout>
                <Analytics />
              </Layout>
            }
          />

          <Route
            path="/:userName/post/:encodedPostId"
            element={
              <Layout>
                <Post />
              </Layout>
            }
          />
          <Route
            path="/support"
            element={
              <Layout>
                <Support />
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
            path="/request-invite-creator"
            element={
              <Layout>
                <RequestInviteCreator />
              </Layout>
            }
          />
          <Route path="/report-issue" element={<BugReportForm />} />
          <Route
            path="/pricing"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/thank-you"
            element={
              <Layout>
                <ThankYou />
              </Layout>
            }
          />
          <Route
            path="/career"
            element={
              <Layout>
                <Career />
              </Layout>
            }
          />
          <Route
            path="/careerdetails/:jobSlug"
            element={
              <Layout>
                <CareerDetails />
              </Layout>
            }
          />
          <Route
            path="/security"
            element={
              <Layout>
                <Security />
              </Layout>
            }
          />
          <Route
            path="/whatisk4m2a"
            element={
              <Layout>
                <Whatisk4m2a />
              </Layout>
            }
          />
          <Route
            path="/contactus"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />
          <Route
            path="/Downloadapp"
            element={
              <Layout>
                <Downloadapp />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogDetails />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
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

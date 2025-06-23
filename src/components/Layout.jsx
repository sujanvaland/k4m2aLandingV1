import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import { Spin } from 'antd';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spin size="large" />
  </div>
);

export default function Layout({ children }) {
  const location = useLocation();
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    //  const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds
    // Add the class to the body
    document.body.classList.add("websitepage");
    // Clean up on unmount
    return () => {
      // clearTimeout(timer);
      // document.body.classList.remove("websitepage");
    };
  }, []);

  // if (loading) {
  //   return (
  //     <div className="loading-wrapper">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  const isSignInPage = location.pathname === "/signin";
  const isProfilePage = location.pathname === "/profile";
  const isPostPage = location.pathname === "/post";
  const isanalytics = location.pathname === "/analytics";

  return (
    <div className="page-wrapper website">
      {!isSignInPage && !isProfilePage && !isPostPage && !isanalytics && <Header />}
      <main className="main cc-home">
        {children}
      </main>
      {!isSignInPage && !isProfilePage && !isPostPage && <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children are provided
};

export { LoadingSpinner };


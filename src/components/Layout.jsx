import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import { Spin } from 'antd';
import { checkProfilePagePathname } from "../utils/pathMatcher.util";
import { POST_PAGE_PATHNAME_PATEERN } from "../constants/regex";

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
  const isProfilePage = checkProfilePagePathname(location.pathname);
  const isPostPage = POST_PAGE_PATHNAME_PATEERN.test(location.pathname);
  const isanalytics = location.pathname === "/analytics";

  // Debug logging
  console.log('Layout Debug:', {
    pathname: location.pathname,
    isSignInPage,
    isProfilePage,
    isPostPage,
    isanalytics,
    showHeader: !isSignInPage && !isProfilePage && !isPostPage && !isanalytics,
    showFooter: !isSignInPage && !isProfilePage && !isPostPage
  });

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


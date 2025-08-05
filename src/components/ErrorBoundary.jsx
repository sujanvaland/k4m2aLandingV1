import React from 'react';
import NotFound from './NotFound';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorType: null };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true, 
      errorType: error.message === '404_NOT_FOUND' ? 'NOT_FOUND' : 'GENERAL' 
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
    // console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, errorType: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.state.errorType === 'NOT_FOUND') {
        return <NotFound />;
      }
      
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>We're sorry, an unexpected error occurred.</p>
          <button onClick={this.handleReload} style={{ margin: 8, padding: '8px 24px' }}>Reload</button>
          <button onClick={this.handleGoHome} style={{ margin: 8, padding: '8px 24px' }}>Go Home</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 
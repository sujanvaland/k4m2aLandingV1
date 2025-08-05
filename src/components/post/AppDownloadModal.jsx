import React from 'react';

export default function AppDownloadModal({ isOpen, onClose, appLink }) {
  if (!isOpen) return null;
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2>Download the K4M2A App</h2>
        <a href={appLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
          Go to App Store
        </a>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: 8,
    padding: '2rem',
    minWidth: 300,
    minHeight: 150,
    position: 'relative',
    boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'none',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
  },
  link: {
    marginTop: 20,
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    borderRadius: 4,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 16,
  },
}; 
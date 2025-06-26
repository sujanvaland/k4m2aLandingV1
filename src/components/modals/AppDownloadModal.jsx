import React from 'react';

export default function AppDownloadModal({ isOpen, onClose, appLink }) {
  if (!isOpen) return null;
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">&times;</button>
        <h2 style={styles.heading}>Download the K4M2A App</h2>
        <p style={styles.text}>Get the best experience by downloading our app from your device's store.</p>
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
    background: 'rgba(30, 41, 59, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(2px)',
  },
  modal: {
    background: '#fff',
    borderRadius: 16,
    padding: '2.5rem 2rem 2rem 2rem',
    minWidth: 320,
    maxWidth: '90vw',
    minHeight: 180,
    position: 'relative',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Inter, Arial, sans-serif',
    transition: 'box-shadow 0.2s',
  },
  closeBtn: {
    position: 'absolute',
    top: 14,
    right: 18,
    background: 'none',
    border: 'none',
    fontSize: 28,
    color: '#64748b',
    cursor: 'pointer',
    transition: 'color 0.2s',
    borderRadius: '50%',
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    margin: '0 0 0.5rem 0',
    fontSize: 22,
    fontWeight: 700,
    color: '#1e293b',
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
  text: {
    color: '#475569',
    fontSize: 15,
    margin: '0 0 1.5rem 0',
    textAlign: 'center',
    lineHeight: 1.5,
    maxWidth: 260,
  },
  link: {
    marginTop: 10,
    padding: '12px 32px',
    background: 'linear-gradient(90deg, #6366f1 0%, #0ea5e9 100%)',
    color: '#fff',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 16,
    boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
    transition: 'background 0.2s, box-shadow 0.2s',
    border: 'none',
    outline: 'none',
    display: 'inline-block',
  },
}; 
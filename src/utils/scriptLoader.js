// Script loading utility
const loadScript = (
  src,
  { async = true, defer = true, onload = null } = {}
) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;

    if (onload) {
      script.onload = () => {
        onload();
        resolve();
      };
    } else {
      script.onload = resolve;
    }

    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Load non-critical scripts after page load
const loadNonCriticalScripts = () => {
  const scripts = [
    // Add your non-critical third-party scripts here
    // Example: { src: 'https://example.com/script.js', options: { async: true } }
  ];

  return Promise.all(
    scripts.map(({ src, options = {} }) => loadScript(src, options))
  );
};

// Initialize script loading
export const initializeScripts = () => {
  // Load critical scripts immediately
  const criticalScripts = [
    // Add your critical scripts here
  ];

  Promise.all(
    criticalScripts.map(({ src, options = {} }) => loadScript(src, options))
  )
    .then(() => {
      // Load non-critical scripts after critical scripts are loaded
      return loadNonCriticalScripts();
    })
    .catch((error) => {
      console.error("Error loading scripts:", error);
    });
};

export default {
  loadScript,
  loadNonCriticalScripts,
  initializeScripts,
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = (metaData) => {
  const location = useLocation();

  useEffect(() => {
    if (metaData.title) {
      document.title = metaData.title.includes('K4M2A') 
        ? metaData.title 
        : `${metaData.title} | K4M2A`;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaData.description) {
      metaDescription.setAttribute('content', metaData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && metaData.keywords) {
      metaKeywords.setAttribute('content', metaData.keywords);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && metaData.url) {
      canonicalLink.setAttribute('href', `https://k4m2a.com${metaData.url}`);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && metaData.title) {
      ogTitle.setAttribute('content', metaData.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && metaData.description) {
      ogDescription.setAttribute('content', metaData.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && metaData.url) {
      ogUrl.setAttribute('content', `https://k4m2a.com${metaData.url}`);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && metaData.image) {
      const imageUrl = metaData.image.startsWith('http') 
        ? metaData.image 
        : `https://k4m2a.com${metaData.image}`;
      ogImage.setAttribute('content', imageUrl);
    }

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && metaData.title) {
      twitterTitle.setAttribute('content', metaData.title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription && metaData.description) {
      twitterDescription.setAttribute('content', metaData.description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && metaData.image) {
      const imageUrl = metaData.image.startsWith('http') 
        ? metaData.image 
        : `https://k4m2a.com${metaData.image}`;
      twitterImage.setAttribute('content', imageUrl);
    }

  }, [metaData, location]);
};

export default useSEO;

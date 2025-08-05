import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = "", 
  image = "/images/k4m2a-og-image.jpg", 
  url = "",
  type = "website"
}) => {
  const siteTitle = "K4M2A";
  const defaultDescription = "K4M2A - A spiritual network building connections that transform lives. Join our community of seekers on a journey of growth, understanding, and transformation.";
  const siteUrl = "https://k4m2a.com";
  
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Update document title and meta tags immediately
  useEffect(() => {
    document.title = metaTitle;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = metaDescription;
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = metaDescription;
      document.head.appendChild(metaDesc);
    }
    
    // Log for debugging
    console.log('SEO Component - Title:', metaTitle);
    console.log('SEO Component - Description:', metaDescription);
  }, [metaTitle, metaDescription]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="K4M2A" />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content="@k4m2a" />
      <meta name="twitter:creator" content="@k4m2a" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;

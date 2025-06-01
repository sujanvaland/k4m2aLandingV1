import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  sizes = "100vw",
  loading = "lazy",
  width,
  height,
  quality = 75
}) => {
  // Generate WebP and responsive image sources
  const generateSrcSet = (src) => {
    const widths = [320, 640, 960, 1280];
    return widths
      .map(width => `${src}?w=${width}&q=${quality} ${width}w`)
      .join(', ');
  };

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={generateSrcSet(src.replace(/\.[^/.]+$/, '.webp'))}
        sizes={sizes}
      />
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number
};

export default OptimizedImage; 
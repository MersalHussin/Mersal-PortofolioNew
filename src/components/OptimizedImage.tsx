import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  quality?: number;
  objectFit?: "cover" | "contain";
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  quality = 80,
  objectFit = "cover",
  className = "",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Next.js like Image Optimizer using a free Cloudflare-backed CDN (wsrv.nl)
  // This converts HTTP/HTTPS images to WebP dynamically and resizes them.
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http://') || originalSrc.startsWith('https://')) {
      const url = new URL('https://wsrv.nl/');
      url.searchParams.append('url', originalSrc);
      url.searchParams.append('output', 'webp');
      url.searchParams.append('q', quality.toString());
      if (width) url.searchParams.append('w', width.toString());
      return url.toString();
    }
    // If it's a local asset (e.g. /assets/...), we return it as is 
    // because external CDNs cannot access localhost during development.
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton / Blur placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-white/5 animate-pulse rounded-inherit"></div>
      )}
      
      <img
        src={hasError ? src : optimizedSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)} // Fallback to original if CDN fails
        className={`w-full h-full transition-opacity duration-700 ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;

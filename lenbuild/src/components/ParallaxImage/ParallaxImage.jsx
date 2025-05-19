import React, { useEffect, useRef } from 'react';

const ParallaxImage = ({ imgSrc, altText, speed = 0.2, className = '' }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax effect when the element is in view
      if (top < windowHeight && top + height > 0) {
        const scrollPosition = window.pageYOffset;
        const elementOffset = scrollPosition + top;
        const offset = (scrollPosition - elementOffset) * speed;
        
        imgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={containerRef} className={`parallax-container ${className}`} style={{ overflow: 'hidden' }}>
      <img 
        ref={imgRef}
        src={imgSrc} 
        alt={altText} 
        style={{ 
          width: '100%', 
          height: '100%',
          objectFit: 'cover',
          transform: 'translateY(0px)',
          transition: 'transform 0.1s ease-out'
        }} 
      />
    </div>
  );
};

export default ParallaxImage;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls to the top of the page when navigating
 * between routes, unless the navigation state includes { scrollToTop: false }
 */
const AutoScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Check if the navigation state includes scrollToTop: false
    // If it does, don't scroll to top (for exceptions like "view more testimonials")
    if (state && state.scrollToTop === false) {
      return;
    }

    // Otherwise, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate scroll
    });
  }, [pathname, state]);

  return null; // This component doesn't render anything
};

export default AutoScrollToTop;

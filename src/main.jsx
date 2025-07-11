import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS (Animate On Scroll)
const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
      disable: window.innerWidth < 768 // Disable animations on mobile for better performance
    });
    
    // Refresh AOS when page loads
    AOS.refresh();
    
    return () => {
      AOS.refreshHard(); // Cleanup
    };
  }, []);
  
  return null;
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Import animations dynamically to ensure DOM is ready
  import('./animations').then(({ animateCounters }) => {
    // Initialize counter animations
    animateCounters();
    
    // Re-initialize counters when navigating back to the page
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        animateCounters();
      }
    });
  });
});

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AOSInitializer />
    <App />
  </StrictMode>
);

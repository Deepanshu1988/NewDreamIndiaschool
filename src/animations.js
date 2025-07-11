// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // The lower the slower
  
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-count') || counter.textContent);
    const count = parseInt(counter.textContent);
    const increment = target / speed;

    if (count < target) {
      counter.textContent = Math.ceil(count + increment).toLocaleString();
      setTimeout(() => animateCounter(counter), 1);
    } else {
      counter.textContent = target.toLocaleString();
    }
  };

  // Reset counters to 0 initially
  counters.forEach(counter => {
    counter.textContent = '0';
  });

  // Intersection Observer to trigger animation when in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is in view
  });

  // Observe each counter
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  if (!scrollToTopBtn) return;

  const handleScroll = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize counter animation
  animateCounters();
  
  // Initialize scroll to top button
  initScrollToTop();
  
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('active');
      if (navLinksContainer) navLinksContainer.classList.remove('active');
    });
  });
});

// Make functions available globally if needed
window.animateCounters = animateCounters;

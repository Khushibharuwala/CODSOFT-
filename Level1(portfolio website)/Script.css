// Smooth scroll for navigation links (if you add a nav bar later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight section in view (optional if using nav)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      section.style.opacity = 1;
    } else {
      section.style.opacity = 0.7;
    }
  });
});

// Resume download alert
const resumeLink = document.querySelector('a.download');
if (resumeLink) {
  resumeLink.addEventListener('click', () => {
    alert("Your resume download will begin shortly.");
  });
}

// Add any interactive JavaScript you need here.
// Example: Smooth scroll for navigation links

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
      this.parentElement.classList.add('active');
    }
  });
});

// Simple contact form alert
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! We will contact you soon.');
});
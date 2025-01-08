// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Example: show an alert when someone clicks any 'download-btn'
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        alert("Your download is ready! And guess what? So am I—for new challenges, collaborations, and maybe a role at your company.");
      });
    });
    
    // Optional: smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 0,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
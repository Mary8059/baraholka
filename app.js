'use strict';

 
document.querySelectorAll('.menu-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});





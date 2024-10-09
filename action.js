const homeLink = document.querySelector('.nav-link[href="#Home"]');
const contactLink = document.querySelector('.nav-link[href="#Contact"]');

homeLink.addEventListener('click', () => {
  alert('Anda telah mengklik Home');
});

contactLink.addEventListener('click', () => {
  alert('Anda telah mengklik Contact');
});
document.addEventListener("DOMContentLoaded", () => {
  fetch('nav.html')
    .then(res => res.text())
    .then(data => document.getElementById('nav-container').innerHTML = data);

  fetch('about.html')
    .then(res => res.text())
    .then(data => document.getElementById('about-container').innerHTML = data);

  fetch('portfolio.html')
    .then(res => res.text())
    .then(data => document.getElementById('portfolio-container').innerHTML = data);

  fetch('contact.html')
    .then(res => res.text())
    .then(data => document.getElementById('contact-container').innerHTML = data);

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-container').innerHTML = data);
});
document.addEventListener("DOMContentLoaded", () => {
  fetch('../sections/navvar.html')
    .then(res => res.text())
    .then(data => document.getElementById('nav-container').innerHTML = data);

  fetch('../sections/about.html')
    .then(res => res.text())
    .then(data => document.getElementById('about-container').innerHTML = data);

  fetch('../sections/portfolios.html')
    .then(res => res.text())
    .then(data => document.getElementById('portfolio-container').innerHTML = data);

  fetch('../sections/contact.html')
    .then(res => res.text())
    .then(data => document.getElementById('contact-container').innerHTML = data);

  fetch('../sections/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-container').innerHTML = data);
});
const navbar = document.querySelector("nav");
const navToggler = document.getElementById("navToggler");
const navLink = document.querySelectorAll(".nav-link");

if (window.innerWidth < 991) {
  navbar.classList.add("nav-scrolled");
  navbar.classList.remove("nav-scrolled-text-shadow");
  navToggler.classList.replace("navbar-dark", "navbar-light");
  navLink.forEach((e) => e.classList.remove("bawah"));
}

document.addEventListener("scroll", function () {
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add("nav-scrolled");
    navbar.classList.remove("nav-scrolled-text-shadow");
    navToggler.classList.replace("navbar-dark", "navbar-light");
    navLink.forEach((e) => e.classList.remove("bawah"));
  } else {
    if (window.innerWidth > 992) {
      navbar.classList.add("nav-scrolled-text-shadow");
      navbar.classList.remove("nav-scrolled");
      navToggler.classList.replace("navbar-light", "navbar-dark");
      navLink.forEach((e) => e.classList.add("bawah"));
    }
  }
});

// Footer
const footer = document.getElementById("footer");
footer.innerHTML = showFooter();

function showFooter() {
  return `<div class="container-fluid footer">
            <div class="row justify-content-center">
              <div class="col-12 text-center footer-content">
                <div class="footer-title text-white">
                  <h1 class="fw-bold">RensFlorist</h1>
                  <ul class="list-unstyled text-uppercase">
                    <li>open from 08:00 AM - 24:00 PM</li>
                    <li class="mb-3">Berastagi - Karo</li>
                  </ul>
                  <span class="me-3"><i class="fa-brands fa-instagram"></i> rensflorist_</span>
                  <span><i class="fa-brands fa-whatsapp"></i> +6282200000000</span>
                </div>
              </div>
            </div>
            <div class="text-footer text-white text-center">
              <p class="m-0">
                Created with <i class="fa-solid fa-heart text-danger"></i> by <a href="https://instagram.com/rngina__?igshid=NTc4MTIwNjQ2YQ==" target="_blank" class="text-warning">Rena Egina Br Pandia</a>
            </div>
          </div>`;
}

// Scroll Up
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go-top-btn").fadeIn();
    } else {
      $(".go-top-btn").fadeOut();
    }
  });
  $(".go-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});

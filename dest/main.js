$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: true,
    animateIn: true,
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      997: {
        items: 1,
        center: false,
      },
      1000: {
        items: 3,
      },
    },
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.querySelector(".menu__btn").style.top = "33px";
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".menu__btn").style.top = "75px";
    document.querySelector(".header").classList.remove("active");
  }
});
if (screen.width > 991) {
  let scroll = document.querySelector(".header_content-bot .line"),
    bodyheight = document.querySelector("body").offsetHeight,
    temp = bodyheight - window.innerHeight;
  window.addEventListener("scroll", () => {
    scroll.style.width = `${(window.scrollY / temp) * 100}%`;
  });
}

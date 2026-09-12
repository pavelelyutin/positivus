document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  // accordion
  accordions.forEach((el) => {
    el.addEventListener("click", (event) => {
      const self = event.currentTarget;
      const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".accordion__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });

  // swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.25,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 2,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".testimonials-button-next",
      prevEl: ".testimonials-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  // burger
  const burger = document.querySelector(".burger");
  const headerRight = document.querySelector(".header__right");
  const navLinks = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    headerRight.classList.toggle("active");
    document.body.classList.toggle("body-hidden");
  });

  // close nav on click link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("active");
      headerRight.classList.remove("active");
      document.body.classList.remove("body-hidden");
    });
  });

  // shadow in header after scrolling
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // gsap animation
  const heroSvg = document.getElementById("hero-svg");

  heroSvg.addEventListener("load", () => {
    const docSvg = heroSvg.contentDocument;
    const heroIcons = docSvg.querySelectorAll(".hero__svg-icon");

    heroIcons.forEach((heroIcon) => {
      moveRandomly(heroIcon);
    });
  });

  function moveRandomly(element) {
    const randomX = gsap.utils.random(-10, 10);
    const randomY = gsap.utils.random(-10, 10);

    const randomDuration = gsap.utils.random(1, 2);

    gsap.to(element, {
      x: randomX,
      y: randomY,
      duration: randomDuration,
      ease: "sine.inOut",
      onComplete: () => {
        moveRandomly(element);
      },
    });
  }

  gsap.from(".hero__title", { x: -500, opacity: 0 });
  gsap.from(".hero__subtitle", { x: -500, opacity: 0, duration: 0.6 });
  gsap.from(".hero__button", { x: -500, opacity: 0, duration: 0.7 });
});

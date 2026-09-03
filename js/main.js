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
    slidesPerView: 2,
    spaceBetween: 50,
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
  });

  // burger
  const burger = document.querySelector('.burger')
  const headerNav = document.querySelector('.header__nav')

  burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    headerNav.classList.toggle('active')
  })



});

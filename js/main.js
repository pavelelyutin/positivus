document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

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

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function () {
      //   // Здесь вы можете создать любой HTML для буллета.
      //   // Вместо стандартной точки можно вставить цифру, иконку или даже миниатюру.
      //   return `<button><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      //             <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
      //           </svg></button>`;
      // },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

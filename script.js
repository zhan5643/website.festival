const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click" ,()=> menuOpenButton.click());


// Close menu when the nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuOpenButton.click();
    });
  });


  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // можно добавить, чтобы можно было кликать по кругляшкам
    },
  });
  
  




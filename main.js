const imgArray = [
  {
    src: "https://topgid.net/uploads/posts/2019-09/1568213750_parizh-francija.jpg",
    info: `<h3>
    Пари́ж (фр. Paris, МФА: [pa.ˈʁi] ( прослухати)) — столиця Франції,
    адміністративний центр регіону Іль-де-Франс. Окремий департамент
    Франції. Розташований на річці Сена. Населення — 2 175 601 особа (на
    01.01.2021)[10], міська агломерація — 10 млн, у 2015 році населення
    міста становило 2 206 488 осіб, агломерації — 12 405 426.
    Штаб-квартири низки міжнародних організацій: ЮНЕСКО, Організація
    економічного співробітництва та розвитку, Міжнародна торгівельна
    палата та інші.
  </h3>`,
  },
  {
    src: "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Venice_4.jpg",
    alt: "Desna",
    info: `<h3>
    Берлі́н (нім. Berlin, МФА: [bɛɐ̯ˈliːn] ( прослухати)) — столиця Федеративної Республіки Німеччина, окрема федеральна земля. Населення — 3,64 млн осіб, найбільше місто країни, найбільше місто ЄС.
  </h3>`,
  },
  {
    src: "https://mandry.club/wp-content/uploads/2019/02/barcelona12.jpg",
    alt: "Vorskla",
    info: `<h3>
    Пари́ж (фр. Paris, МФА: [pa.ˈʁi] ( прослухати)) — столиця Франції,
    адміністративний центр регіону Іль-де-Франс. Окремий департамент
    Франції. Розташований на річці Сена. Населення — 2 175 601 особа (на
    01.01.2021)[10], міська агломерація — 10 млн, у 2015 році населення
    міста становило 2 206 488 осіб, агломерації — 12 405 426.
    Штаб-квартири низки міжнародних організацій: ЮНЕСКО, Організація
    економічного співробітництва та розвитку, Міжнародна торгівельна
    палата та інші.
  </h3>`,
  },
  {
    src: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/berlin.jpg",
    alt: "Psel",
    info: `<h3>
    Берлі́н (нім. Berlin, МФА: [bɛɐ̯ˈliːn] ( прослухати)) — столиця Федеративної Республіки Німеччина, окрема федеральна земля. Населення — 3,64 млн осіб, найбільше місто країни, найбільше місто ЄС.
  </h3>`,
  },
  {
    src: "https://34travel.me/media/upload/images/2022/JANUARY/berlin/IMG_6684%20(2).jpg",
    alt: "Ariel",
    info: `<h3>
    Пари́ж (фр. Paris, МФА: [pa.ˈʁi] ( прослухати)) — столиця Франції,
    адміністративний центр регіону Іль-де-Франс. Окремий департамент
    Франції. Розташований на річці Сена. Населення — 2 175 601 особа (на
    01.01.2021)[10], міська агломерація — 10 млн, у 2015 році населення
    міста становило 2 206 488 осіб, агломерації — 12 405 426.
    Штаб-квартири низки міжнародних організацій: ЮНЕСКО, Організація
    економічного співробітництва та розвитку, Міжнародна торгівельна
    палата та інші.
  </h3>`,
  },
];

const dots = document.querySelectorAll(".slider-dots_item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const sliderContent = document.querySelector(".sliderContent");
const sliderImg = document.querySelector(".sliderImg");
next.addEventListener("click", nextItem);
prev.addEventListener("click", prevItem);

let slideIndex = -1;
function nextItem() {
  if (slideIndex === (imgArray.length-1) ) {
    slideIndex = -1;
  }
  if (slideIndex !== 4) {
    slideIndex += 1;
    showSlide ()
  }
}
function prevItem() {
  if (slideIndex === 0 || slideIndex === -1) {
    slideIndex = 5;
  }
  if (slideIndex !== -2) {
    slideIndex -= 1
    showSlide ()
  }
}
function currentSlide(n) {
  slideIndex = n;
  showSlide ()
}
function showSlide (){
  dots.forEach((element) => {
    element.classList.remove("active");
  });
  dots[slideIndex].classList.add("active");
  sliderContent.innerHTML = imgArray[slideIndex].info;
  sliderImg.innerHTML = `          
  <img
  src=${imgArray[slideIndex].src}
  alt=""
/>`;
}
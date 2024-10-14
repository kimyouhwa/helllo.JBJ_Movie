    // mini_calendar
    function updateDate() {
    const today = new Date();
    const date = today.getDate();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["1Jan", "2Feb", "3Mar", "4Apr", "5May", "6Jun", 
                        "7Jul", "8Aug", "9Sep", "10월", "11Nov", "12Dec"];

    const day = dayNames[today.getDay()];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    document.getElementById("month").textContent = month;
    document.getElementById("date").textContent = date < 10 ? '0' + date : date;
}

window.onload = updateDate;

// swiper slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 7,
    // centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
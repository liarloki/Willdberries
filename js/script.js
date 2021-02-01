const swiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// window.onload = function() {
// let arr = document.getElementsByClassName("header");
// arr[1].innerHTML = 'hi';
// }

// function setText() {
//   var a = document.getElementById("demo");
//   var arr = a.childNodes;
//   for (var x = 0; x < arr.length; x++) {
//     arr[x].innerHTML = "Я живой абрикосик";
//   }
// }

// //calling the function with setTimeout to make sure the HTML is loaded
// setTimeout(setText, 500);
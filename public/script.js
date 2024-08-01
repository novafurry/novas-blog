function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomIntBetween(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var navigato = false;
var deviceIsTouch = true;
setInterval(function () {
  if (deviceIsTouch) {
    if (!navigato) {
      cursor.style.transform = `translate3d(calc(${
        Math.min(x + getRandomIntBetween(-350,350), window.innerWidth)
      }px - 50% ), calc(${Math.min(y + getRandomIntBetween(-350,350), window.innerHeight)}px - 50%), 0)`;
    }
  }
}, 100);

var cursor = document.querySelector(".blob");
var x = 0;
var y = 0;
document.addEventListener("mousemove", function (e) {
  x = e.clientX + getRandomInt(10);
  y = e.clientY + getRandomInt(10);
  window.localStorage.x = x;
  window.localStorage.y = y;
  if (!navigato) {
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  }
  deviceIsTouch = false;
});
document.addEventListener("touchstart", function(){
  deviceIsTouch = true
})
// document.querySelectorAll(".card").forEach(function(el){
//   el.style.scale = "0"
//   el.style.opacity = "0"
//   el.style.filter = "blur(10px)"
// })
// // setTimeout(function(){
// //   document.querySelectorAll(".card").forEach(function(el){
// //     setTimeout(function(){
// //       el.style.scale = "100%"
// //       el.style.opacity = "100%"
// //       el.style.filter = ""
// //     }, 100)
// //   })
// // }, 800)

// document.querySelectorAll(".card, nav").forEach(function (el) {
//   el.classList.add("animate__animated");
//   var anims = ["", "Down", "Left", "Right", "Up"];
//   el.classList.add(`animate__zoomIn${anims[getRandomInt(5 - 1)]}`);
// });

window.onbeforeunload = function () {
  document.querySelectorAll(".card, nav, a").forEach(function (el) {
    // el.classList.add("animate__animated");
    el.className = el.className.replace("zoomIn", "zoomOut");
    cursor.style.transform = `translate3d(calc(50%), calc(50%), 0)`;
  });
};
document
  .querySelectorAll(".nav-link[location], a[href], .pill[location], .bpost")
  .forEach(function (eel) {
    eel.addEventListener("mousedown", function () {
      console.log(eel, eel.getAttribute("href"), eel.getAttribute("location"));
      document.querySelectorAll("*").forEach(function (el) {
        el.className = el.className.replace("zoomIn", "zoomOut");
        navigato = true;
        cursor.style.transform = ``;
      });
      setTimeout(function(){},1300)
      setTimeout(function () {
        window.location.href =
          eel.getAttribute("href") || eel.getAttribute("location");
      }, 1500);
    });

    // el.addEventListener("mouseup", function () {
    //   document.querySelectorAll(".card, nav").forEach(function (el) {
    //     el.className = el.className.replace("zoomOut", "zoomIn")

    //   });
    // });
  });

// window.addEventListener("DOMContentLoaded", function(){
//   if(!!window.localStorage.x){
//     // cursor.style.transform = `translate3d(calc(${window.localStorage.x}px - 50%), calc(${window.localStorage.y}px - 50%), 0)`;
//     x = window.localStorage.x
//     y = window.localStorage.y
//   }
// })

var flashes = 0;

function more() {
  var socialsCard = document.querySelector(".social");
  window.scrollTo(socialsCard)
  socialsCard.style.background = "#ff7070";
  setTimeout(function () {
    socialsCard.style.background = "unset";
    flashes++;
    if (flashes < 2) {
      setTimeout(more, 300);
    } else {
      flashes = 0;
    }
  }, 200);
}

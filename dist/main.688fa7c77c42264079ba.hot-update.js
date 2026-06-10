"use strict";
self["webpackHotUpdatewp_theme"]("main",{

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lenis */ "./node_modules/lenis/dist/lenis.mjs");
/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! split-type */ "./node_modules/split-type/dist/index.js");

gsap.registerPlugin(ScrollTrigger, SplitText);
const presentation = document.querySelector("#presentation");
let split = SplitText.create(presentation, {
  type: "chars"
});
if (presentation) {
  gsap.from(split.chars, {
    color: "rgb(139 139 139)",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#presentation",
      scrub: true,
      start: "top 45%",
      end: "bottom 50%",
      scroller: ".content"
    }
  });
}
function body() {
  document.body.style.overflow = "scroll";
  document.body.style.overflowX = "hidden";
}
let tl = gsap.timeline({ delay: 0 });
if (document.querySelector(".col")) {
  let raf = function(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  const lenis = new lenis__WEBPACK_IMPORTED_MODULE_0__["default"]({
    wrapper: document.querySelector(".smooth-scroll")
  });
  requestAnimationFrame(raf);
  if (sessionStorage.getItem("visited")) {
    tl.to(
      ".container",
      {
        scale: 6,
        duration: 3,
        opacity: 0,
        display: "none",
        ease: "power4.inOut"
      },
      "-=2"
    );
    tl.to(".content", {
      top: 0,
      duration: 3,
      opacity: 1,
      ease: "power3.out"
    });
  }
  tl.to(".col", {
    top: "0",
    duration: 2,
    ease: "power4.inOut"
  });
  tl.to(
    ".c-1 .item",
    {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    },
    "-=2"
  );
  tl.to(
    ".c-2 .item",
    {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    },
    "-=4"
  );
  tl.to(
    ".c-3 .item",
    {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    },
    "-=4"
  );
  tl.to(
    ".c-4 .item",
    {
      top: "0",
      stagger: -0.25,
      duration: 3,
      ease: "power4.inOut"
    },
    "-=4"
  );
  tl.to(
    ".c-5 .item",
    {
      top: "0",
      stagger: 0.25,
      duration: 3,
      ease: "power4.inOut"
    },
    "-=4"
  );
  tl.to(
    ".container",
    {
      scale: 6,
      duration: 4,
      opacity: 0,
      display: "none",
      ease: "power4.inOut"
    },
    "-=2"
  );
  tl.to(".content", {
    top: 0,
    duration: 3,
    opacity: 1,
    ease: "power3.out"
  });
} else {
  body();
}
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 1e3,
  autoplay: {
    delay: 2e3
  }
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  loopedSlides: 5,
  //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: false,
  allowTouchMove: false,
  // Disables swipe gestures on touch screens
  simulateTouch: true,
  // Disables mouse click-and-drag
  watchOverflow: true
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 500,
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  loopedSlides: 5,
  //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs
  },
  navigation: {
    nextEl: ".swiper-button-apres",
    prevEl: ".swiper-button-avant"
  }
});
if (document.querySelector(".form_name")) {
  document.querySelector(".form_name").addEventListener("focusin", function() {
    document.querySelector(".label_name").classList.add("focused");
  });
  document.querySelector(".form_name").addEventListener("focusout", function() {
    if (document.querySelector(".form_name").value == "") {
      document.querySelector(".label_name").classList.remove("focused");
    }
  });
  document.querySelector(".form_email").addEventListener("focusin", function() {
    document.querySelector(".label_email").classList.add("focused");
  });
  document.querySelector(".form_email").addEventListener("focusout", function() {
    if (document.querySelector(".form_email").value == "") {
      document.querySelector(".label_email").classList.remove("focused");
    }
  });
  document.querySelector(".form_subject").addEventListener("focusin", function() {
    document.querySelector(".label_subject").classList.add("focused");
  });
  document.querySelector(".form_subject").addEventListener("focusout", function() {
    if (document.querySelector(".form_subject").value == "") {
      document.querySelector(".label_subject").classList.remove("focused");
    }
  });
}

const text = new split_type__WEBPACK_IMPORTED_MODULE_1__["default"](".homepage_text h1");
gsap.set(".homepage_text h1 .char", { y: 225, rotation: 30 });
gsap.set(".homepage_text h1", { scale: 1.2 });
const timeline = gsap.timeline();
if (sessionStorage.getItem("visited")) {
  timeline.to(".homepage_text h1 .char", {
    duration: 2.5,
    y: 0,
    rotation: 0,
    stagger: 0.1,
    ease: "power3.inOut"
  });
} else {
  timeline.to(".homepage_text h1 .char", {
    delay: 5.5,
    duration: 2.5,
    y: 0,
    rotation: 0,
    stagger: 0.1,
    ease: "power3.inOut"
  });
  sessionStorage.setItem("visited", "true");
}
timeline.to(
  ".homepage_text h1",
  {
    scale: 1.1,
    ease: "expo.inOut"
  },
  "-=0.5"
);
timeline.to(
  ".homepage_text h1",
  {
    scale: 1,
    ease: "expo.inOut"
  },
  "-=0.5"
);
if (document.querySelector(".cards")) {
  document.querySelector(".cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("bento_follow")) {
      const rect = card.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d03b671f2089ad20e48b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.688fa7c77c42264079ba.hot-update.js.map
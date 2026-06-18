import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger, SplitText);
import SplitType from "split-type";

// Store Lenis instance globally for cleanup
let lenisRafId = null;
let lenisInstance = null;

function initHome() {
  // Kill all ScrollTriggers from previous page
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Cancel Lenis animation frame
  if (lenisRafId) {
    cancelAnimationFrame(lenisRafId);
    lenisRafId = null;
  }

  const presentation = document.querySelector('#presentation');

  if (presentation) {
    let split = SplitText.create(presentation, {
      type: "words, chars",
    });

    gsap.from(split.chars, {
      color: "rgb(139 139 139)",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#presentation",
        scrub: true,
        start: "top 45%",
        end: "bottom 50%",
        scroller: ".content",
      },
    });
  }

  function body() {
    document.body.style.overflow = "scroll";
    document.body.style.overflowX = "hidden";
  }

  let tl = gsap.timeline({ delay: 0 });

  if (document.querySelector(".col")) {
    lenisInstance = new Lenis({
      wrapper: document.querySelector(".smooth-scroll"),
    });

    // Store raf id globally
    function raf(time) {
      lenisInstance.raf(time);
      lenisRafId = requestAnimationFrame(raf);
    }

    lenisRafId = requestAnimationFrame(raf);

    if (sessionStorage.getItem("visited")) {
      tl.to(
        ".container",
        {
          scale: 6,
          duration: 3,
          opacity: 0,
          display: "none",
          ease: "power4.inOut",
        },
        "-=2",
      );

      tl.to(".content", {
        top: 0,
        duration: 3,
        opacity: 1,
        ease: "power3.out",
      });
    }

    tl.to(".col", {
      top: "0",
      duration: 2,
      ease: "power4.inOut",
    });

    tl.to(
      ".c-1 .item",
      {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=2",
    );

    tl.to(
      ".c-2 .item",
      {
        top: "0",
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4",
    );

    tl.to(
      ".c-3 .item",
      {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4",
    );

    tl.to(
      ".c-4 .item",
      {
        top: "0",
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4",
    );

    tl.to(
      ".c-5 .item",
      {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut",
      },
      "-=4",
    );

    tl.to(
      ".container",
      {
        scale: 6,
        duration: 4,
        opacity: 0,
        display: "none",
        ease: "power4.inOut",
      },
      "-=2",
    );

    tl.to(".content", {
      top: 0,
      duration: 3,
      opacity: 1,
      ease: "power3.out",
    });
  } else {
    body();
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
  });

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    allowTouchMove: false,
    simulateTouch: true,
    watchOverflow: true,
  });


  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 500,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopedSlides: 5,
    thumbs: {
      swiper: galleryThumbs,
    },
    navigation: {
      nextEl: ".swiper-button-apres",
      prevEl: ".swiper-button-avant",
    },
  });

  if (document.querySelector(".form_name")) {
    document.querySelector(".form_name").addEventListener("focusin", function () {
      document.querySelector(".label_name").classList.add("focused");
    });

    document
      .querySelector(".form_name")
      .addEventListener("focusout", function () {
        if (document.querySelector(".form_name").value == "") {
          document.querySelector(".label_name").classList.remove("focused");
        }
      });

    document
      .querySelector(".form_email")
      .addEventListener("focusin", function () {
        document.querySelector(".label_email").classList.add("focused");
      });

    document
      .querySelector(".form_email")
      .addEventListener("focusout", function () {
        if (document.querySelector(".form_email").value == "") {
          document.querySelector(".label_email").classList.remove("focused");
        }
      });

    document
      .querySelector(".form_subject")
      .addEventListener("focusin", function () {
        document.querySelector(".label_subject").classList.add("focused");
      });

    document
      .querySelector(".form_subject")
      .addEventListener("focusout", function () {
        if (document.querySelector(".form_subject").value == "") {
          document.querySelector(".label_subject").classList.remove("focused");
        }
      });
  }

  const text = new SplitType(".homepage_text h1");

  gsap.set(".homepage_text h1 .char", { y: 225, rotation: 30 });
  gsap.set(".homepage_text h1", { scale: 1.2 });

  const timeline = gsap.timeline();
  if (sessionStorage.getItem("visited")) {
    timeline.to(".homepage_text h1 .char", {
      duration: 2.5,
      y: 0,
      rotation: 0,
      stagger: 0.1,
      ease: "power3.inOut",
    });
  } else {
    timeline.to(".homepage_text h1 .char", {
      delay: 5.5,
      duration: 2.5,
      y: 0,
      rotation: 0,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    sessionStorage.setItem("visited", "true");
  }

  timeline.to(
    ".homepage_text h1",
    {
      scale: 1.1,
      ease: "expo.inOut",
    },
    "-=0.5",
  );

  timeline.to(
    ".homepage_text h1",
    {
      scale: 1,
      ease: "expo.inOut",
    },
    "-=0.5",
  );

  if (document.querySelector(".cards")) {
    document.querySelector(".cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("bento_follow")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }
}

// Init on page load
document.addEventListener("DOMContentLoaded", initHome);

// Re-init on Swup page change
window.addEventListener("swup:updated", initHome);

export { initHome };

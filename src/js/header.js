import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const initHeaderMenu = () => {
  const header = document.querySelector(".menu");
  if (!header) return;

  const elements = Array.from(header.querySelectorAll("a.nav-roll"));
  const COLLAPSED_WIDTH = "fit-content";
  const INTRO_SESSION_KEY = "header-intro-played";
  const controller = new AbortController();
  let activeTimeline;
  let isIntroRunning = false;
  let hasIntroPlayed = false;

  const getExpandedWidth = () =>
    elements.length * 100 + (elements.length - 1) * 16;

  const measureExpandedHeight = () => {
    gsap.set(elements, { display: "flex", opacity: 0 });
    const h = header.offsetHeight;
    gsap.set(elements, { display: "none", opacity: 0 });
    return h;
  };

  const stopActiveAnimation = () => {
    activeTimeline?.kill();
    activeTimeline = null;
    isIntroRunning = false;
    gsap.killTweensOf(header);
    gsap.killTweensOf(elements);
  };

  const setCollapsedState = () => {
    gsap.set(elements, {
      opacity: 0,
      display: "none",
    });
    gsap.set(header, {
      width: COLLAPSED_WIDTH,
      opacity: 0.8,
    });
  };

  const openHeader = () => {
    stopActiveAnimation();

    activeTimeline = gsap
      .timeline({
        onComplete: () => {
          activeTimeline = null;
        },
      })
      .to("#header-plus", {
        duration: 0.3,
        opacity: 0,
        display: "none",
        ease: "power2.out",
        overwrite: "auto",
      })
      .to(header, {
        duration: 0.4,
        width: getExpandedWidth(),
        height: measureExpandedHeight(),
        opacity: 1,
        ease: "power4.inOut",
        overwrite: "auto",
      })
      .set(elements, {
        display: "flex",
      })
      .to(elements, {
        duration: 0.35,
        opacity: 1,
        stagger: 0.08,
        ease: "power4.inOut",
        overwrite: "auto",
      });
  };

  const closeHeader = () => {
    stopActiveAnimation();

    activeTimeline = gsap
      .timeline({
        onComplete: () => {
          activeTimeline = null;
        },
      })
      .to(elements, {
        duration: 0.35,
        opacity: 0,
        ease: "power4.inOut",
        stagger: 0.08,
        overwrite: "auto",
      })
      .set(elements, {
        display: "none",
      })
      .to(header, {
        duration: 0.4,
        width: COLLAPSED_WIDTH,
        opacity: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      })
      .to("#header-plus", {
        duration: 0.3,
        opacity: 1,
        display: "block",
        ease: "power2.out",
        overwrite: "auto",
      });
  };

  const shouldPlayIntro = () => {
    if (hasIntroPlayed) return false;

    try {
      if (sessionStorage.getItem(INTRO_SESSION_KEY) === "1") {
        hasIntroPlayed = true;
        return false;
      }

      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
      return true;
    } catch {
      return true;
    }
  };

  const buildIntroTimeline = (tl) => {
    const elementSpans = Array.from(header.querySelectorAll("a.nav-roll span"));
    console.log("element spans:", elementSpans);

    tl.set(elements, {
      opacity: 1,
      display: "flex",
    })
      .set(header, {
        width: getExpandedWidth(),
        height: header.offsetHeight,
        opacity: 1,
      })
      .from(header, { duration: 1, y: -200, ease: "power2.out" });

    elementSpans.forEach((el, i) => {
      const split = new SplitText(el, { type: "chars" });
      tl.from(split.chars, {
        delay: i * 0.02,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.5,
      });
    });
  };

  const playIntroOnFirstLoad = () => {
    if (!shouldPlayIntro() || isIntroRunning) return;

    stopActiveAnimation();
    isIntroRunning = true;

    activeTimeline = gsap.timeline({
      onComplete: () => {
        activeTimeline = null;
        isIntroRunning = false;
        hasIntroPlayed = true;

        if (header.matches(":hover")) {
          openHeader();
        }
      },
    });

    buildIntroTimeline(activeTimeline);
  };

  setCollapsedState();

  header.addEventListener("mouseenter", openHeader, {
    signal: controller.signal,
  });

  header.addEventListener("mouseleave", closeHeader, {
    signal: controller.signal,
  });

  if (document.readyState === "complete") {
    playIntroOnFirstLoad();
  } else {
    window.addEventListener("load", playIntroOnFirstLoad, {
      once: true,
      signal: controller.signal,
    });
  }

  window.__headerMenuCleanup = () => {
    controller.abort();
    stopActiveAnimation();
  };
};

window.__headerMenuCleanup?.();
initHeaderMenu();

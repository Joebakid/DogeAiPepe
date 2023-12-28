gsap.fromTo(
  ".search-content",
  { opacity: 0 },
  { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
  ">"
);
gsap.fromTo(
  ".social-icon",
  { opacity: 0 },
  { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
  ">"
);

gsap.fromTo(
  ".char",
  { skewX: 30, opacity: 0 },
  {
    skewX: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  },
  ">"
);

gsap.fromTo(
  ".section--1-title",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  ">"
);

gsap.fromTo(
  ".top-left",
  { opacity: 0, yPercent: -20 },
  { opacity: 1, duration: 1, stagger: 0.5, yPercent: 0 },
  "<"
);

gsap.fromTo(
  ".top-left-center",
  { opacity: 0, yPercent: 50 },
  { opacity: 1, duration: 1, stagger: 0.2, yPercent: 0 },
  "<"
);

gsap.fromTo(
  ".button-animate",
  { opacity: 0, xPercent: -50 },
  { opacity: 1, duration: 0.5, stagger: 1, xPercent: 0 },
  ">"
);

// section-2

const sectionOneScroll = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "25%",
    end: "100%",
    // markers: { startColor: "blue", endColor: "blue" },
    pin: true,
    pinSpacing: false,
    scrub: true,
    onUpdate: (self) => {
      const opacity = 1 - self.progress;
      gsap.to("header", { opacity: opacity });
    },
  },
});

const sectionTwoScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionTwo",
    start: "80%",
    end: "100%",
    // markers: { startColor: "blue", endColor: "blue" },
    pin: true,
    pinSpacing: false,
    scrub: true,
  },
});
// onUpdate: (self) => {
//   const opacity = 1 - self.progress;
//   gsap.to(".sectionTwo", { opacity: opacity });
// },

// ROADMAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeln = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    pin: true,
    pinSpacing: true,
    start: "left-=120px left",
    end: "+=2000",
    scrub: 1,
  },
});

timeln.addLabel("card1");
timeln.to(".card-1", {
  xPercent: 0,
  opacity: 1,
});

timeln.from(".card-2", {
  xPercent: 75,
  opacity: 0,
});
timeln.addLabel("card2");

timeln.to(
  ".card-1",
  {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5,
  },
  "-=0.3"
);

timeln.to(".card-2", {
  xPercent: 0,
  opacity: 1,
});

timeln.from(".card-3", {
  xPercent: 75,
  opacity: 0,
});
timeln.addLabel("card3");

timeln.to(
  ".card-2",
  {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6,
  },
  "-=0.3"
);

timeln.to(".card-3", {
  xPercent: 0,
  opacity: 1,
});

timeln.to(".card-3", {});

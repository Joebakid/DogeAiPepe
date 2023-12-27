gsap.fromTo(
  ".search-content",
  { opacity: 0, xPercent: -20 },
  { opacity: 1, duration: 1, stagger: 0.2, xPercent: 0, ease: "power2.out" },
  ">"
);
gsap.fromTo(
  ".social-icon",
  { opacity: 0, xPercent: -20 },
  { opacity: 1, duration: 1, stagger: 0.2, xPercent: 0, ease: "power2.out" },
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
  { opacity: 0, xPercent: -50 },
  { opacity: 1, duration: 1, xPercent: 0 },
  ">"
);

gsap.fromTo(
  ".top-left",
  { opacity: 0, yPercent: -20 },
  { opacity: 1, duration: 1, stagger: 0.5, yPercent: 0 },
  ">"
);

gsap.fromTo(
  ".top-left-center",
  { opacity: 0, yPercent: 50 },
  { opacity: 1, duration: 1, stagger: 0.2, yPercent: 0 },
  ">"
);

gsap.fromTo(
  ".button-52",
  { opacity: 0, xPercent: -50 },
  { opacity: 1, duration: 0.5, stagger: 1, xPercent: 0 },
  ">"
);

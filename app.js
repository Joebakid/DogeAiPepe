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

// TIMER

const countDownDate = new Date("30 Dec ,2023 15:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // document.getElementById("days").innerHTML = days;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
});

console.log(countDownDate);

/*
=============
Glide Js Carousel
=============
 */

const sliders = [
  { id: "glide_1", config: { type: "carousel", startAt: 0, autoplay: 3000, hoverpause: true, perView: 1, animationDuration: 800, animationTimingFunc: "linear" }},
  { id: "glide_2", config: { type: "carousel", startAt: 0, perView: 4, rewin: false, animationDuration: 800, animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", breakpoints: { 1200: { perView: 3 }, 768: { perView: 2 }}}},
  { id: "glide_3", config: { type: "carousel", startAt: 0, perView: 4, rewin: false, animationDuration: 800, animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", breakpoints: { 1200: { perView: 3 }, 768: { perView: 2 }}}},
  { id: "glide_4", config: { type: "carousel", startAt: 0, perView: 1, rewin: false, animationDuration: 800, animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)" }},
  { id: "glide_5", config: { type: "carousel", startAt: 0, perView: 3, rewin: false, autoplay: 3000, animationDuration: 800, animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", breakpoints: { 998: { perView: 2 }, 768: { perView: 1 }}}},
];

// Initialize all sliders
sliders.forEach(slider => {
  const element = document.getElementById(slider.id);
  if (element) {
    new Glide(`#${slider.id}`, slider.config).mount();
  }
});

AOS.init();

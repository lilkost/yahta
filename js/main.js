new WOW().init();

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options for a specific gallery
});

// create the scrollSmoother before your scrollTriggers
// ScrollSmoother.create({
//   smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.2, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });

export function scrollEvent(slowPercent: number) {
  // Set the scroll speed factor
  console.log(slowPercent);
  // Add an event listener for the 'wheel' event
  document.addEventListener(
    "wheel",
    (event) => {
      // Prevent default scrolling behavior
      event.preventDefault();

      // Calculate the new scroll position
      const delta = event.deltaY;
      const scrollPosition = window.scrollY + delta * slowPercent;

      // Set the new scroll position
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

const container = document.getElementById("task-container");
let fadeTimeout;

// Create a "fake" thumb overlay
const thumb = document.createElement("div");
thumb.className = "scroll-thumb";
container.appendChild(thumb);

// Style the thumb with js
Object.assign(thumb.style, {
  position: "absolute",
  right: "2px",
  top: "0",
  width: "5px",
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.7)",
  opacity: "0",
  transition: "opacity 0.3s",
  pointerEvents: "none", // don't block scrolling
  display: "none" // to hide intially
});

// Check if content overflows
function isOverflowing() {
  return container.scrollHeight > container.clientHeight;
}

// Update thumb position and sixe
function updateThumb() {
  if (!isOverflowing()) {
    thumb.style.display = "none"; // to hide thumb if not overflowing
    return;
  } else {
    thumb.style.display = "block"; // show thumb if content overflows
  }

  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;
  const scrollTop = container.scrollTop;

  const thumbHeight = Math.max(clientHeight / scrollHeight * clientHeight, 20); // for minimum size
  const thumbTop = scrollTop / scrollHeight * clientHeight;

  thumb.style.height = thumbHeight + 'px';
  thumb.style.top = thumbTop + "px";
}

// For Fade in/out of thumb
function showThumb() {
  if (!isOverflowing()) return; // to do nothing if no overflow
  thumb.style.opacity = "1";
  clearTimeout(fadeTimeout);
  fadeTimeout = setTimeout(() => {
    thumb.style.opacity = "0";
  }, 1000); // fade out after 1s idle
}

// Event listeners
container.addEventListener("scroll", () => {
  updateThumb();
  showThumb();
});

container.addEventListener("mouseenter", showThumb);
container.addEventListener("mouseleave", () => {
  fadeTimeout = setTimeout(() => {
    thumb.style.opacity = "0";
  }, 500);
});

// Initial check
updateThumb();
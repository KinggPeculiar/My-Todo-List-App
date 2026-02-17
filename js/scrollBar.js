export function scrollBar() {
  const overlay = document.querySelector(".overlay");
  const taskContainer = document.querySelector(".task-container")
  let fadeTimeout;

  // Create a "fake" thumb overlay
  const scrollThumb = document.createElement("div");
  scrollThumb.className = "scroll-thumb";
  overlay.appendChild(scrollThumb);

  // Style the thumb with js
  Object.assign(scrollThumb.style, {
    position: "absolute",
    right: "4px",
    top: "0",
    width: "2px",
    height: "50px",
    borderRadius: "2px",
    background: "rgba(255, 255, 255, 0.85)",
    opacity: "1",
    transition: "opacity 0.3s",
    pointerEvents: "none", // don't block scrolling
    display: "none", // to hide intially
    transition: "top 0.2s ease, opacity 0.3 ease"
  });

  // Check if content overflows
  function isOverflowing() {
    return taskContainer.scrollHeight > taskContainer.clientHeight;
  };

  // Fade system
  function showScrollThumb() {
    scrollThumb.style.opacity = "1";
    scrollThumb.style.display = "block";

    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
      scrollThumb.style.opacity = "0";
    }, 1200);
  }

  // Update scrollThumb position and size
  function updatescrollThumb() {
    // Set height of overlayContainer to be equal in ratio to todoTaskContainer
    const overlayHeight = overlay.clientHeight;
    const contentHeight = taskContainer.scrollHeight;
    const visibleHeight = taskContainer.clientHeight;

    if(!isOverflowing()) {
      scrollThumb.style.display = "none"; // to hide scrollThumb if not overflowing
      return;
    }

    scrollThumb.style.display = "block";

    // scrollThumb height
    const MinScrollThumbHeight = 20;
    const ratio = visibleHeight / contentHeight;
    const usableScrollThumbHeight = overlayHeight * ratio;
    const scrollThumbHeight = Math.max(usableScrollThumbHeight, MinScrollThumbHeight);
    scrollThumb.style.height = scrollThumbHeight + "px";

    // scrollThumb position
    const scrollTop = taskContainer.scrollTop;
    const scrollRatio = scrollTop / (contentHeight - visibleHeight);
    const maxScrollThumbTop = overlayHeight - scrollThumbHeight;

    scrollThumb.style.top = scrollRatio * maxScrollThumbTop + "px";

    showScrollThumb();
  }

  // Events
  taskContainer.addEventListener("scroll", updatescrollThumb);

  // Resize window
  window.addEventListener("resize", updatescrollThumb);

  // Resize container
  const observer = new ResizeObserver(updatescrollThumb);
  observer.observe(taskContainer);

  // DOM mutations (tasks add/remove)
  const mutationObserver = new MutationObserver(updatescrollThumb);
  mutationObserver.observe(taskContainer, {
    childList: true,
    subtree: true
  });

  // Initial run
  updatescrollThumb();
}
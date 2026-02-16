export function scrollBar() {
  const overlayContainer = document.querySelector(".overlay");
  const todoTaskContainer = document.querySelector(".task-container")
  let fadeTimeout;

  // Create a "fake" thumb overlay
  const newThumb = document.createElement("div");
  newThumb.className = "scroll-thumb";
  overlayContainer.appendChild(newThumb);

  // Style the thumb with js
  Object.assign(newThumb.style, {
    position: "absolute",
    right: "1px",
    top: "0",
    width: "5px",
    height: "50px",
    borderRadius: "10px",
    background: "rgba(0, 0, 0, 0.7)",
    opacity: "1",
    transition: "opacity 0.3s",
    pointerEvents: "none", // don't block scrolling
    display: "block", // to hide intially
    backgroundColor: "red"
  });


  // Set height of overlayContainer to be equal in ratio to todoTaskContainer
  const overlayContainerHeight = overlayContainer.clientHeight;
  const todoTaskContainerHeight = todoTaskContainer.scrollHeight;

  
  const ratio = Math.min(overlayContainerHeight / todoTaskContainerHeight, 1);
  const newThumbHeight = overlayContainerHeight * ratio;

  newThumb.style.height = `${newThumbHeight}px`;

  // Check if content overflows
  function isOverflowing() {
    return overlayContainer.scrollHeight > todoTaskContainer.clientHeight;
  }

  console.log(isOverflowing());
}
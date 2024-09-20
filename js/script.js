const container = document.querySelector(".flex-container");
const canvasSize = document.querySelector("#canvasSize");

// Create value display element
const valueDisplay = document.createElement("span");
valueDisplay.textContent = `${canvasSize.value}x${canvasSize.value}`;
canvasSize.insertAdjacentElement("afterend", valueDisplay);

canvasSize.addEventListener("input", function () {
  valueDisplay.textContent = `${canvasSize.value}x${canvasSize.value}`;
  generateGrid(canvasSize.value);
});

// Function to generate the grid
function generateGrid(size) {
  // Clear existing squares
  container.innerHTML = ""; // Remove all existing squares

  // Calculate square size
  const squareSize = Math.floor(960 / size); // 960 is the width of the container

  // Create new squares
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${squareSize}px`; // Set square width
    div.style.height = `${squareSize}px`; // Set square height
    container.appendChild(div);

    // Start painting on mousedown
    div.addEventListener("mousedown", function () {
      painting = true; // Start painting
      div.classList.add("hover"); // Add hover class to the clicked square
    });

    // Add hover class on mouseover while painting
    div.addEventListener("mouseover", function () {
      if (painting) {
        div.classList.add("hover"); // Add hover class
      }
    });
  }

  // Stop painting when the mouse leaves the canvas
  container.addEventListener("mouseleave", function () {
    painting = false; // Stop painting
  });

  // Stop painting on mouseup
  container.addEventListener("mouseup", function () {
    painting = false; // Stop painting
  });
}

// Initialize painting state
let painting = false; // Track if the mouse is pressed

// Initialize the grid on load
generateGrid(canvasSize.value);

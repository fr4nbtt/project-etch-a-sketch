const container = document.querySelector(".flex-container");
const canvasSize = document.querySelector("#canvasSize");

// Create value display element
const valueDisplay = document.createElement("span");
valueDisplay.textContent = `${canvasSize.value}x${canvasSize.value}`;

canvasSize.insertAdjacentElement("afterend", valueDisplay);

canvasSize.addEventListener("input", function () {
  valueDisplay.textContent = `${canvasSize.value}x${canvasSize.value}`;
});

let painting = false; // Track if the mouse is pressed

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
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

  // Stop painting on mouseup
  div.addEventListener("mouseup", function () {
    painting = false;
  });
}

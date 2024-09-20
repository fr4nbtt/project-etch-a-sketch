const container = document.querySelector(".flex-container");

for (i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  container.appendChild(div);
}

const tooltipTrigger = document.getElementById("tooltipTrigger");
const tooltip = document.getElementById("tooltip");

tooltipTrigger.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

tooltipTrigger.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});

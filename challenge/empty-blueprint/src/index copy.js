const bgColor = document.body.style.backgroundColor;
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

console.log(windowWidth);

document.body.style.backgroundColor = colors[0];
function colorChange() {
  const windowWidth = window.innerWidth;
  console.log(widowWidth);
  if (windowWidth > 500) {
    document.body.style.backgroundColor = colors[0];
  } else {
    document.body.style.backgroundColor = colors[1];
  }
}

window.addEventListener("resize", colorChange);

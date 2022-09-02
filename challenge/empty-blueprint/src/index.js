const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

document.body.style.backgroundColor = colors[0];

function colorChange() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 300) {
    document.body.style.backgroundColor = colors[0];
  } else if (windowWidth >= 300 && windowWidth < 500) {
    document.body.style.backgroundColor = colors[1];
  } else if (windowWidth >= 500 && windowWidth < 700) {
    document.body.style.backgroundColor = colors[2];
  } else if (windowWidth >= 700 && windowWidth < 900) {
    document.body.style.backgroundColor = colors[3];
  } else {
    document.body.style.backgroundColor = colors[4];
  }
}

window.addEventListener("resize", colorChange);

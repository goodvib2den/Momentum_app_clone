// find clock DOM (use html h2 tag)
const clock = document.querySelector("#clock");

// clock fn
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

// page load paint clock fn
getClock();

// every 1s repaint clock fn
setInterval(getClock, 1000);

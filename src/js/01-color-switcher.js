const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorChange;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange() {
  colorChange = setInterval(() => {
    startButton.setAttribute('disabled', true);
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopColorChange() {
  clearInterval(colorChange);
  startButton.removeAttribute('disabled');
}
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

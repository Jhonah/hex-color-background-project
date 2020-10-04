const button = document.getElementById('btn');
const hexValue = document.getElementById('hex-value');
const body = document.querySelector('body');
const colors = ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#0000FF"];

body.style.backgroundColor = 'violet';

button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
    hexValue.innerHTML = colors[colorIndex];
})
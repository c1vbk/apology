const button = document.getElementById('moving-button');
const container = document.querySelector('.container');

button.addEventListener('mouseover', () => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random() * (containerWidth - button.clientWidth);
    const randomY = Math.random() * (containerHeight - button.clientHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const hiddenText = document.getElementById("hidden-text");
        hiddenText.classList.remove("hidden");
    }, 5000);
});
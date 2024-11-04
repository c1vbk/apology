document.getElementById('reveal-button').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.classList.toggle('hidden');
    this.textContent = hiddenMessage.classList.contains('hidden') ? "Reveal My Heart" : "Hide My Heart";
});

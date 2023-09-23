
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');


greetButton.addEventListener('click', function () {
    const name = nameInput.value;
    if (name.trim() !== '') {
        greeting.textContent = `Hello, ${name}!`;
    } else {
        greeting.textContent = 'Please enter your name.';
    }
});

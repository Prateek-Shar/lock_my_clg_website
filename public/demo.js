document.querySelectorAll('.rating input').forEach((input) => {
    input.addEventListener('change', (event) => {
        alert(`You have rated ${event.target.id.charAt(4)} stars.`);
    });
});

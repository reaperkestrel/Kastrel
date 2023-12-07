document.addEventListener("DOMContentLoaded", function() {
    const colors = ['#9142ff', '#2aff54', '#ffde37', '#ff3737', '#4385ff'];
    const confettiContainer = document.querySelector('.confetti-container');

    function createConfetti(animationDelay) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = animationDelay ? 0 : Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationiteration', () => {
            confetti.remove();
        });
    }

    for (let i = 0; i < 100; i++) {
        createConfetti(0);
    }
    setInterval(createConfetti, 20);

    const catImage = document.getElementById('cat-image');
    setInterval(function() {
        catImage.classList.add('bob');
        setTimeout(function() {
            catImage.classList.remove('bob');
        }, 1000);
    }, 3000);
});

// Safari hack
const resizer = () => {
    document.querySelector('body').style.height = window.innerHeight + "px";
}
window.addEventListener("resize", (_e) => resizer());
document.addEventListener("DOMContentLoaded", (_e) => resizer());

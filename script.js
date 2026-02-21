const slides = document.querySelectorAll(".slide");

// 1. Intersection Observer for scroll reveal (keep your existing logic)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

slides.forEach(slide => {
  observer.observe(slide);
});

// 2. Click to pop messages logic
const phrases = ["Canım", "göz bebeğim", "❤️", "çok güzelsin", "aşkim!", "✨", "Фаре!"];

document.querySelectorAll('.slide img').forEach(img => {
    img.style.cursor = "pointer"; // Make it look clickable
    
    img.addEventListener('click', (e) => {
        // Create 2 messages
        createMessage(e.target.parentElement, 'left');
        createMessage(e.target.parentElement, 'right');
    });
});

function createMessage(container, side) {
    const msg = document.createElement('div');
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    msg.classList.add('pop-message');
    msg.classList.add(side === 'left' ? 'pop-left' : 'pop-right');
    msg.innerText = randomPhrase;

    container.appendChild(msg);

    // Remove from DOM after animation finishes
    setTimeout(() => {
        msg.remove();
    }, 1000);
}

const frames = document.querySelectorAll('.gallery-frame');
const frameObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('frame-visible');
    }
  });
}, { threshold: 0.25 });
frames.forEach(frame => frameObserver.observe(frame));
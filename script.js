// Cherry Rain Animation
function createCherry() {
    const cherry = document.createElement('div');
    cherry.textContent = '🍒';
    cherry.classList.add('cherry');
    cherry.style.left = `${Math.random() * 90}vw`; // Keep within 90vw to avoid overflow

    document.body.appendChild(cherry);

    // Remove cherry after animation ends
    cherry.addEventListener('animationend', () => cherry.remove());
}

function cherryRain() {
    document.body.style.overflow = 'hidden'; // Temporarily lock scrolling
    const cherryInterval = setInterval(createCherry, 100); // Create every 100ms
    
    setTimeout(() => {
        clearInterval(cherryInterval);
        document.body.style.overflow = ''; // Restore scrolling after animation
    }, 7000); // Stop after 7 seconds
}

// Subscribe Form Validation
document.getElementById('mc-embedded-subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('mce-EMAIL').value;
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        document.getElementById('subscribe-section').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
    }
});

// Trigger cherry rain on page load
window.addEventListener('load', cherryRain);

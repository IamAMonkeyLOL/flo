// Array of fading love notes
const loveNotes = [
    "Your beautiful xx 💕",
    "I miss you every second you're away xx 💖",
    "You're always on my mind xx ❤️",
    "My world is better with you in it xx 💓",
    "I love you xx 💞"
];

// Function to rotate messages every few seconds
let messageIndex = 0;
const messagesElement = document.getElementById("messages");

function showNextMessage() {
    messagesElement.textContent = loveNotes[messageIndex];
    messagesElement.style.opacity = 1; // Reset opacity for fade effect
    messageIndex = (messageIndex + 1) % loveNotes.length;
}

setInterval(() => {
    messagesElement.style.opacity = 0; // Fade out effect
    setTimeout(showNextMessage, 500); // Wait before showing next message
}, 3000); // Change message every 3 seconds

// Love Meter logic
let loveLevel = 0;
const loveLevelDisplay = document.getElementById("loveLevel");

// Message for when love level is below 75%
const loveMessageElement = document.createElement("div");
loveMessageElement.id = "loveMessage";
loveMessageElement.style.color = "gray";
loveMessageElement.style.textAlign = "center";
document.body.appendChild(loveMessageElement);

function increaseLove() {
    if (loveLevel < 100) {
        loveLevel += Math.floor(Math.random() * 10) + 5; // Increase by random amount
        loveLevel = Math.min(loveLevel, 100); // Cap at 100%
        loveLevelDisplay.textContent = `💖 ${loveLevel}%`;

        // Display message if love level is less than 75%
        if (loveLevel < 75) {
            loveMessageElement.textContent = "This is because your not with me 💔";
        } else {
            loveMessageElement.textContent = "You clicked it enough ❤️"; // Clear message if 75% or above
        }
    }
}

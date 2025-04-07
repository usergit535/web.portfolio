// Typing Effect for Welcome Message
const welcomeText = "Welcome to My Web Portfolio";
let index1 = 0;

function typeWelcomeText() {
    let welcomeElement = document.getElementById("welcome-text");
    if (index1 < welcomeText.length) {
        welcomeElement.textContent += welcomeText.charAt(index1);
        index1++;
        setTimeout(typeWelcomeText, 100);
    }
}

// Typing Effect for Introduction Section
const introText = "Introduction to Web Technologies";
let index2 = 0;

function typeIntroText() {
    let introElement = document.getElementById("intro-text");
    if (index2 < introText.length) {
        introElement.textContent += introText.charAt(index2);
        index2++;
        setTimeout(typeIntroText, 100);
    }
}

// Call typing functions on page load
window.onload = function () {
    typeWelcomeText();
    typeIntroText();
};

// Random Quote Generator
const quotes = [
    "Technology is best when it brings people together. – Matt Mullenweg",
    "It has become appallingly obvious that our technology has exceeded our humanity. – Albert Einstein",
    "The science of today is the technology of tomorrow. – Edward Teller",
    "Technology is a useful servant but a dangerous master. – Christian Lous Lange",
    "The future depends on what we do in the present. – Mahatma Gandhi"
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
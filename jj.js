const typewriterEl = document.getElementById('typewriter');
const typewriterMessage = "Every moment with you feels like magic — you are my Leo, my forever flame. 💖";

let charIndex = 0;

function typeWriter() {
  if (charIndex < typewriterMessage.length) {
    typewriterEl.textContent += typewriterMessage.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // typing speed in ms
  }
}

typeWriter();

// // Wait for the page to load before starting balloon animation
// document.addEventListener("DOMContentLoaded", function () {
//   // Start background music on load
//   let audio = document.getElementById("birthdaySong");
//   audio.play();
// });

window.addEventListener("load", function () {
  const audio = document.getElementById("birthdaySong");

  // Play audio once the page is loaded
  audio.play().catch(() => {
    // If the browser prevents autoplay, ask for user interaction
    document.body.addEventListener("click", () => audio.play(), { once: true });
  });
});

// Function to generate random confetti colors
function randomColor() {
  const colors = [
    "#FF6347",
    "#FFD700",
    "#8A2BE2",
    "#32CD32",
    "#FF69B4",
    "#00CED1",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create confetti particles
function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    // Create 100 confetti pieces
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Randomize horizontal position within viewport width (from bottom)
    confetti.style.left = `${Math.random() * 100}vw`;

    // Randomize animation duration and the direction of the burst
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`; // Confetti burst duration
    confetti.style.transform = `translateX(${Math.random() * 100 - 50}px)`; // Randomize horizontal movement
    confetti.style.backgroundColor = randomColor(); // Random confetti color

    confettiContainer.appendChild(confetti);

    // Remove confetti after the animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Trigger confetti when the page loads
document.addEventListener("DOMContentLoaded", function () {
  createConfetti(); // Show confetti
});












 // Get button and audio elements
 const surpriseBtn = document.getElementById('surprise-btn');
 const surpriseAudio = document.getElementById('surprise-audio');
 const audioMessage = document.getElementById('audio-message');

 // Add click event to button
 surpriseBtn.addEventListener('click', () => {
     // Play the audio when the button is clicked
     surpriseAudio.play();

     // Show message after audio starts playing
     surpriseAudio.onplay = () => {
         audioMessage.style.display = 'block'; // Show hidden message
     };
 });
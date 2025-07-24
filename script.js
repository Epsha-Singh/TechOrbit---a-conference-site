
// Countdown Timer
function updateCountdown() {
  const now = new Date();
  const targetDate = new Date();
  targetDate.setDate(now.getDate() + 7);

  const difference = targetDate.getTime() - now.getTime();

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    updateCountdownElement('days', days);
    updateCountdownElement('hours', hours);
    updateCountdownElement('minutes', minutes);
    updateCountdownElement('seconds', seconds);
  }
}

function updateCountdownElement(id, value) {
  const element = document.getElementById(id);
  const currentValue = element.textContent;
  const newValue = value.toString().padStart(2, '0');

  if (currentValue !== newValue) {
    // Create flip animation
    const flip = document.createElement('div');
    flip.className = 'flip-animation';
    flip.textContent = newValue;
    element.appendChild(flip);

    // Update main value after animation
    setTimeout(() => {
      element.textContent = newValue;
      flip.remove();
    }, 500);
  }
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Create background particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random size between 1px and 4px
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation properties
    const tx = (Math.random() * 200 - 100) + 'px';
    const ty = (Math.random() * 200 - 100) + 'px';
    const duration = Math.random() * 15 + 15 + 's';
    const delay = Math.random() * 5 + 's';

    particle.style.setProperty('--tx', tx);
    particle.style.setProperty('--ty', ty);
    particle.style.animationDuration = duration;
    particle.style.animationDelay = delay;

    particlesContainer.appendChild(particle);
  }
}

// Modal functionality
const modal = document.getElementById('registrationModal');
const registerBtns = document.querySelectorAll('#registerBtn, #registerBtn2');
const closeBtn = document.getElementById('closeModal');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

// Open modal when any register button is clicked
registerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal when X button is clicked
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Handle form submission
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const ticket = document.getElementById('ticket').value;

  // In a real app, you would send this data to a server
  console.log('Registration submitted:', { name, email, ticket });

  // Show success message
  registrationForm.style.display = 'none';
  successMessage.classList.add('active');

  // Reset form and close modal after 3 seconds
  setTimeout(() => {
    registrationForm.reset();
    registrationForm.style.display = 'block';
    successMessage.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }, 3000);
});

// Initialize particles
createParticles();

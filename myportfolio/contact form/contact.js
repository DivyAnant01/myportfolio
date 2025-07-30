const card = document.getElementById('contactCard');
const tapIcon = document.querySelector('.tap-icon');
const menuToggle = document.getElementById('menuToggle');
const navRight = document.getElementById('navRight');

// Expand card on click
card.addEventListener('click', function () {
  if (!card.classList.contains('expanded')) {
    card.classList.remove('collapsed');
    card.classList.add('expanded');
    tapIcon.style.display = 'none';
  }
});

// Collapse card when clicking outside
document.addEventListener('click', function (e) {
  if (!card.contains(e.target) && card.classList.contains('expanded')) {
    card.classList.add('collapsed');
    card.classList.remove('expanded');
    tapIcon.style.display = 'block';
  }
});

// Hamburger toggle
menuToggle.addEventListener('click', () => {
  navRight.classList.toggle('active');
});

// Form submission
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (result.success) {
    alert("Message sent successfully!");
    this.reset();
  } else {
    alert("Something went wrong. Please try again!");
  }
});

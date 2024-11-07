document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
// Hamburger Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-menu').classList.toggle('active');
});

// GSAP Animations for Profile Picture
const profileImg = document.querySelector('.profile-img');

profileImg.addEventListener('mouseenter', () => {
  gsap.to(".profile-img", { 
    duration: 0.8, 
    scale: 1.1, 
    rotate: 15, 
    ease: "power1.out", 
    boxShadow: "0px 15px 25px rgba(255, 255, 255, 0.5)"
  });
});

profileImg.addEventListener('mouseleave', () => {
  gsap.to(".profile-img", { 
    duration: 0.8, 
    scale: 1, 
    rotate: 0, 
    ease: "power1.out", 
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"
  });
});

// Name and Bio Animation
gsap.from(".name", { duration: 1.2, opacity: 0, y: -50, delay: 0.5, ease: "bounce.out" });
gsap.from(".title", { duration: 1.2, opacity: 0, y: 50, delay: 1 });
gsap.from(".bio p", { duration: 1.5, opacity: 0, scale: 0.8, ease: "elastic", delay: 1.5 });
gsap.from(".skills h2", { duration: 1.2, opacity: 0, y: -30, delay: 2 });
gsap.from(".skills ul li", {
  duration: 1.2,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  ease: "back",
  delay: 2.5
});
